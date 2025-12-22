
import type { Metadata } from "next";
import CodeBlock from "../../components/code-block";

const pageUrl = "https://opsorch.com/docs/installation";

export const metadata: Metadata = {
  title: "Installation & Configuration | OpsOrch Documentation",
  description: "Guide for standing up OpsOrch Core, Console, and Adapters in real Kubernetes environments.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    url: pageUrl,
    title: "Installation & Configuration | OpsOrch Documentation",
    description: "Deploying OpsOrch to Kubernetes and configuring it for production.",
  },
};

export default function InstallationPage() {
  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Installation & Configuration",
            description: "Guide for standing up OpsOrch Core, Console, and Adapters in real Kubernetes environments.",
            url: pageUrl,
            author: {
              "@type": "Organization",
              name: "OpsOrch",
            },
          }),
        }}
      />
      <div className="mx-auto max-w-4xl space-y-16">
        <header>
          <p className="opsorch-tag">Documentation</p>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">
            Installation & Configuration
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Deploying OpsOrch to Kubernetes and configuring it for production.
          </p>
        </header>

        {/* Prerequisites */}
        <section className="opsorch-card border-[#1f3c43] p-8">
          <h2 className="text-2xl font-semibold text-white">Prerequisites</h2>
          <ul className="mt-6 space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-[#72e0e0]">•</span>
              <span><strong>Kubernetes Cluster:</strong> v1.20+ (EKS, GKE, AKS, or local).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#72e0e0]">•</span>
              <span><strong>Helm 3:</strong> Recommended for managing deployments (chart coming soon).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#72e0e0]">•</span>
              <span><strong>PostgreSQL (Optional):</strong> Required only if using persistent history features (Enterprise).</span>
            </li>
          </ul>
        </section>

        {/* Core Installation */}
        <section className="opsorch-card border-[#1f3c43] p-8">
          <h2 className="text-2xl font-semibold text-white">1. Deploying OpsOrch Core</h2>
          <p className="mt-4 text-slate-300">
            The Core service is stateless. It requires configuration for the adapters you wish to enable.
          </p>

          <div className="mt-8">
            <h3 className="font-semibold text-white mb-4">Kubernetes Manifest</h3>
            <CodeBlock language="yaml">
              {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: opsorch-core
  namespace: opsorch
spec:
  replicas: 2
  selector:
    matchLabels:
      app: opsorch-core
  template:
    metadata:
      labels:
        app: opsorch-core
    spec:
      containers:
        - name: core
          image: ghcr.io/opsorch/opsorch-core:latest
          ports:
            - containerPort: 8080
          env:
            # Enable Incident Capability
            - name: OPSORCH_INCIDENT_PROVIDER
              value: "pagerduty"
            - name: OPSORCH_INCIDENT_CONFIG
              valueFrom:
                secretKeyRef:
                  name: opsorch-secrets
                  key: pagerduty-config
            
            # Enable Metrics Capability
            - name: OPSORCH_METRIC_PROVIDER
              value: "datadog"
            - name: OPSORCH_METRIC_CONFIG
              valueFrom:
                secretKeyRef:
                  name: opsorch-secrets
                  key: datadog-config
                  
            # Log Level
            - name: LOG_LEVEL
              value: "info"
---
apiVersion: v1
kind: Service
metadata:
  name: opsorch-core
  namespace: opsorch
spec:
  selector:
    app: opsorch-core
  ports:
    - port: 80
      targetPort: 8080
`}
            </CodeBlock>
          </div>
        </section>

        {/* Console Installation */}
        <section className="opsorch-card border-[#1f3c43] p-8">
          <h2 className="text-2xl font-semibold text-white">2. Deploying OpsOrch Console</h2>
          <p className="mt-4 text-slate-300">
            The Console is a Next.js application that talks to the Core service.
          </p>

          <div className="mt-8">
            <h3 className="font-semibold text-white mb-4">Kubernetes Manifest</h3>
            <CodeBlock language="yaml">
              {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: opsorch-console
  namespace: opsorch
spec:
  replicas: 2
  selector:
    matchLabels:
      app: opsorch-console
  template:
    metadata:
      labels:
        app: opsorch-console
    spec:
      containers:
        - name: console
          image: ghcr.io/opsorch/opsorch-console:latest-oss
          ports:
            - containerPort: 3000
          env:
            # URL to reach OpsOrch Core (ClusterIP service)
            - name: NEXT_PUBLIC_OPSORCH_CORE_URL
              value: "http://opsorch-core.opsorch.svc.cluster.local"
---
apiVersion: v1
kind: Service
metadata:
  name: opsorch-console
  namespace: opsorch
spec:
  selector:
    app: opsorch-console
  ports:
    - port: 80
      targetPort: 3000
`}
            </CodeBlock>
          </div>
        </section>

        {/* Secret Management */}
        <section className="opsorch-card border-[#1f3c43] p-8">
          <h2 className="text-2xl font-semibold text-white">3. Secret Management</h2>
          <p className="mt-4 text-slate-300">
            Sensitive configuration (API keys, tokens) should be injected via Kubernetes Secrets.
            OpsOrch expects the <code>_CONFIG</code> environment variables to contain the full JSON payload
            for the adapter configuration.
          </p>

          <div className="mt-8">
            <h3 className="font-semibold text-white mb-4">Example Secret</h3>
            <CodeBlock language="yaml">
              {`apiVersion: v1
kind: Secret
metadata:
  name: opsorch-secrets
  namespace: opsorch
stringData:
  pagerduty-config: |
    {
      "apiToken": "u+x8...",
      "fromEmail": "admin@example.com"
    }
  datadog-config: |
    {
      "apiKey": "abc123...",
      "appKey": "def456..."
    }
`}
            </CodeBlock>
          </div>
        </section>

        {/* Environment Variables Reference */}
        <section className="opsorch-card border-[#1f3c43] p-8">
          <h2 className="text-2xl font-semibold text-white">Environment Variables Reference</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full text-sm text-slate-300">
              <thead>
                <tr className="border-b border-slate-700 text-left">
                  <th className="px-3 py-2 text-[#72e0e0]">Variable</th>
                  <th className="px-3 py-2 text-[#72e0e0]">Service</th>
                  <th className="px-3 py-2 text-[#72e0e0]">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="px-3 py-2 font-mono">PORT</td>
                  <td className="px-3 py-2">Core</td>
                  <td className="px-3 py-2">Port to listen on (default: 8080)</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono">LOG_LEVEL</td>
                  <td className="px-3 py-2">Core</td>
                  <td className="px-3 py-2">debug, info, warn, error (default: info)</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono">OPSORCH_*_PROVIDER</td>
                  <td className="px-3 py-2">Core</td>
                  <td className="px-3 py-2">Name of the adapter to use (e.g., jira, pagerduty)</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono">OPSORCH_*_CONFIG</td>
                  <td className="px-3 py-2">Core</td>
                  <td className="px-3 py-2">JSON configuration for the adapter</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-mono">NEXT_PUBLIC_OPSORCH_CORE_URL</td>
                  <td className="px-3 py-2">Console</td>
                  <td className="px-3 py-2">Publicly accessible URL or internal Cluster URL for Core</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
}
