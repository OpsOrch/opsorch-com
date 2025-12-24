
import type { Metadata } from "next";
import Link from "next/link";
import CodeBlock from "../../components/code-block";

const pageUrl = "https://opsorch.com/docs/building-with-adapters";

export const metadata: Metadata = {
    title: "Building with Adapters | OpsOrch Documentation",
    description: "Build production-ready OpsOrch Core with your adapter stack. Complete guide with examples for Jira, Prometheus, PagerDuty, and more.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        url: pageUrl,
        title: "Building with Adapters | OpsOrch Documentation",
        description: "Learn how to build OpsOrch Core with adapter plugins for Jira, Prometheus, PagerDuty, Elasticsearch, Slack, and GitHub.",
    },
};

export default function CustomImagesPage() {
    return (
        <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TechArticle",
                        headline: "Building Custom Docker Images for OpsOrch Core",
                        description: "Complete guide to building production-ready OpsOrch Core Docker images with adapter plugins.",
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
                        Building Custom Docker Images
                    </h1>
                    <p className="mt-4 text-lg text-slate-300">
                        Create production-ready OpsOrch Core images with your adapter stack bundled as plugins.
                    </p>
                </header>

                {/* Overview */}
                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Overview</h2>
                    <p className="mt-4 text-slate-300">
                        OpsOrch Core ships as a minimal base image. To integrate with external systems like Jira, Prometheus, PagerDuty, or Elasticsearch,
                        you add <strong>adapter plugins</strong> to the image. This guide shows you how to build custom images that bundle the exact plugins your stack needs.
                    </p>
                    <div className="mt-6 space-y-3">
                        <h3 className="font-semibold text-white">When to use custom images:</h3>
                        <ul className="space-y-2 text-slate-300">
                            <li className="flex gap-3">
                                <span className="text-[#72e0e0]">•</span>
                                <span>Bundle specific adapter plugins into a single, versioned image</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#72e0e0]">•</span>
                                <span>Deploy to environments where runtime plugin downloading isn&apos;t ideal</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#72e0e0]">•</span>
                                <span>Create immutable, reproducible images for production</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Quick Start */}
                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Quick Start</h2>
                    <p className="mt-4 text-slate-300">
                        Here&apos;s a minimal example adding Jira ticket support to OpsOrch Core:
                    </p>

                    <div className="mt-6">
                        <h3 className="font-semibold text-white mb-4">Dockerfile</h3>
                        <CodeBlock language="dockerfile">
                            {`FROM ghcr.io / opsorch / opsorch - core:v0.2.0
WORKDIR / opt / opsorch

# Download Jira ticket plugin
ADD https://github.com/OpsOrch/opsorch-jira-adapter/releases/download/v0.1.0/ticketplugin-linux-amd64 ./plugins/ticketplugin
RUN chmod + x./ plugins / ticketplugin

# Configure plugin path
ENV OPSORCH_TICKET_PLUGIN = /opt/opsorch / plugins / ticketplugin`}
                        </CodeBlock>
                    </div>

                    <div className="mt-6">
                        <h3 className="font-semibold text-white mb-4">Build and Run</h3>
                        <CodeBlock language="bash">
                            {`docker build - t my - opsorch: latest.
docker run - p 8080: 8080 \\
-e OPSORCH_TICKET_CONFIG = '{"apiToken":"...","email":"you@example.com","apiURL":"https://your-domain.atlassian.net","projectKey":"OPS"}' \\
my - opsorch: latest`}
                        </CodeBlock>
                    </div>
                </section>

                {/* Multi-Adapter Example */}
                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Multi-Adapter Production Example</h2>
                    <p className="mt-4 text-slate-300">
                        A complete observability stack with incident management, metrics, logs, and messaging:
                    </p>

                    <div className="mt-6">
                        <h3 className="font-semibold text-white mb-4">Dockerfile</h3>
                        <CodeBlock language="dockerfile">
                            {`FROM ghcr.io / opsorch / opsorch - core:v0.2.0
WORKDIR / opt / opsorch

# Incident Management(PagerDuty)
ADD https://github.com/OpsOrch/opsorch-pagerduty-adapter/releases/download/v0.1.5/incidentplugin-linux-amd64 ./plugins/incidentplugin
ADD https://github.com/OpsOrch/opsorch-pagerduty-adapter/releases/download/v0.1.5/serviceplugin-linux-amd64 ./plugins/serviceplugin

# Ticketing(Jira)
ADD https://github.com/OpsOrch/opsorch-jira-adapter/releases/download/v0.1.0/ticketplugin-linux-amd64 ./plugins/ticketplugin

# Metrics(Prometheus)
ADD https://github.com/OpsOrch/opsorch-prometheus-adapter/releases/download/v0.1.0/metricplugin-linux-amd64 ./plugins/metricplugin
ADD https://github.com/OpsOrch/opsorch-prometheus-adapter/releases/download/v0.1.0/alertplugin-linux-amd64 ./plugins/alertplugin

# Logs(Elasticsearch)
ADD https://github.com/OpsOrch/opsorch-elastic-adapter/releases/download/v0.1.0/logplugin-linux-amd64 ./plugins/logplugin

# Messaging(Slack)
ADD https://github.com/OpsOrch/opsorch-slack-adapter/releases/download/v0.1.0/messagingplugin-linux-amd64 ./plugins/messagingplugin

# Deployments & Teams(GitHub)
ADD https://github.com/OpsOrch/opsorch-github-adapter/releases/download/v0.1.0/deploymentplugin-linux-amd64 ./plugins/deploymentplugin
ADD https://github.com/OpsOrch/opsorch-github-adapter/releases/download/v0.1.0/teamplugin-linux-amd64 ./plugins/teamplugin

# Make all plugins executable
RUN chmod + x./ plugins/*

# Configure plugin paths
ENV OPSORCH_INCIDENT_PLUGIN=/opt/opsorch/plugins/incidentplugin \\
    OPSORCH_SERVICE_PLUGIN=/opt/opsorch/plugins/serviceplugin \\
    OPSORCH_TICKET_PLUGIN=/opt/opsorch/plugins/ticketplugin \\
    OPSORCH_METRIC_PLUGIN=/opt/opsorch/plugins/metricplugin \\
    OPSORCH_ALERT_PLUGIN=/opt/opsorch/plugins/alertplugin \\
    OPSORCH_LOG_PLUGIN=/opt/opsorch/plugins/logplugin \\
    OPSORCH_MESSAGING_PLUGIN=/opt/opsorch/plugins/messagingplugin \\
    OPSORCH_DEPLOYMENT_PLUGIN=/opt/opsorch/plugins/deploymentplugin \\
    OPSORCH_TEAM_PLUGIN=/opt/opsorch/plugins/teamplugin`}
                        </CodeBlock>
                    </div>

                    <div className="mt-6">
                        <h3 className="font-semibold text-white mb-4">.env Configuration</h3>
                        <CodeBlock language="bash">
                            {`# Core Configuration
OPSORCH_BEARER_TOKEN=your-secure-random-token-here

# PagerDuty Incident Configuration
OPSORCH_INCIDENT_CONFIG={"apiToken":"pdtoken_xxxxx","serviceID":"P123456","fromEmail":"oncall@example.com","apiURL":"https://api.pagerduty.com"}

# Jira Ticket Configuration
OPSORCH_TICKET_CONFIG={"apiToken":"jira_token_xxxxx","email":"bot@example.com","apiURL":"https://your-domain.atlassian.net","projectKey":"OPS"}

# Prometheus Metrics Configuration
OPSORCH_METRIC_CONFIG={"url":"http://prometheus:9090"}

# Elasticsearch Logs Configuration
OPSORCH_LOG_CONFIG={"addresses":["http://elasticsearch:9200"],"username":"elastic","password":"changeme","indexPattern":"logs-*"}

# Slack Messaging Configuration
OPSORCH_MESSAGING_CONFIG={"token":"xoxb-your-slack-bot-token"}

# GitHub Deployment & Team Configuration
OPSORCH_DEPLOYMENT_CONFIG={"token":"ghp_xxxxx","owner":"your-org","repo":"your-repo"}
OPSORCH_TEAM_CONFIG={"token":"ghp_xxxxx","organization":"your-org"}`}
                        </CodeBlock>
                    </div>
                </section>

                {/* Adapter Configuration Reference */}
                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Adapter Configuration Reference</h2>
                    <p className="mt-4 text-slate-300">
                        Each adapter requires specific configuration passed via <code className="text-[#72e0e0]">OPSORCH_&#123;CAPABILITY&#125;_CONFIG</code> environment variables.
                    </p>

                    <div className="mt-8 space-y-6">
                        {/* PagerDuty */}
                        <div>
                            <h3 className="font-semibold text-white">PagerDuty (Incident & Service)</h3>
                            <div className="mt-3">
                                <CodeBlock language="json">
                                    {`{
  "apiToken": "your-pagerduty-api-token",
  "serviceID": "PXXXXXX",
  "fromEmail": "oncall@example.com",
  "apiURL": "https://api.pagerduty.com"
}`}
                                </CodeBlock>
                            </div>
                            <p className="mt-2 text-sm text-slate-400">
                                Get API token from PagerDuty: <strong>Integrations</strong> → <strong>API Access Keys</strong>.
                                Find Service ID in your service URL.
                            </p>
                        </div>

                        {/* Jira */}
                        <div>
                            <h3 className="font-semibold text-white">Jira (Ticket)</h3>
                            <div className="mt-3">
                                <CodeBlock language="json">
                                    {`{
  "apiToken": "your-jira-api-token",
  "email": "bot@example.com",
  "apiURL": "https://your-domain.atlassian.net",
  "projectKey": "OPS"
}`}
                                </CodeBlock>
                            </div>
                            <p className="mt-2 text-sm text-slate-400">
                                Create API token at: <Link href="https://id.atlassian.com/manage-profile/security/api-tokens" className="text-[#72e0e0] hover:underline" target="_blank">
                                    Atlassian API tokens
                                </Link>
                            </p>
                        </div>

                        {/* Prometheus */}
                        <div>
                            <h3 className="font-semibold text-white">Prometheus (Metric & Alert)</h3>
                            <div className="mt-3">
                                <CodeBlock language="json">
                                    {`{
  "url": "http://prometheus:9090"
}

// For alerts (Alertmanager):
{
  "alertmanagerURL": "http://alertmanager:9093"
}`}
                                </CodeBlock>
                            </div>
                        </div>

                        {/* Elasticsearch */}
                        <div>
                            <h3 className="font-semibold text-white">Elasticsearch (Log)</h3>
                            <div className="mt-3">
                                <CodeBlock language="json">
                                    {`{
  "addresses": ["http://elasticsearch:9200"],
  "username": "elastic",
  "password": "your-password",
  "indexPattern": "logs-*"
}`}
                                </CodeBlock>
                            </div>
                        </div>

                        {/* Slack */}
                        <div>
                            <h3 className="font-semibold text-white">Slack (Messaging)</h3>
                            <div className="mt-3">
                                <CodeBlock language="json">
                                    {`{
  "token": "xoxb-your-slack-bot-token"
}`}
                                </CodeBlock>
                            </div>
                            <p className="mt-2 text-sm text-slate-400">
                                Required scopes: <code className="text-[#72e0e0]">chat:write</code>, <code className="text-[#72e0e0]">channels:read</code>,
                                <code className="text-[#72e0e0]">groups:read</code>
                            </p>
                        </div>

                        {/* GitHub */}
                        <div>
                            <h3 className="font-semibold text-white">GitHub (Ticket, Deployment, Team)</h3>
                            <div className="mt-3">
                                <CodeBlock language="json">
                                    {`{
  "token": "ghp_your-github-token",
  "owner": "your-org",
  "repo": "your-repo",
  "organization": "your-org"
}`}
                                </CodeBlock>
                            </div>
                            <p className="mt-2 text-sm text-slate-400">
                                Required scopes: <code className="text-[#72e0e0]">repo</code>, <code className="text-[#72e0e0]">read:org</code>,
                                <code className="text-[#72e0e0]">read:user</code>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Troubleshooting */}
                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Troubleshooting</h2>

                    <div className="mt-6 space-y-6">
                        <div>
                            <h3 className="font-semibold text-white">Plugin Not Loading</h3>
                            <p className="mt-2 text-slate-300">
                                <strong>Symptom:</strong> API returns <code className="text-[#72e0e0]">501 Not Implemented</code> with error{" "}
                                <code className="text-[#72e0e0]">&#123;capability&#125;_provider_missing</code>
                            </p>
                            <div className="mt-4">
                                <CodeBlock language="bash">
                                    {`# Check file permissions
docker exec -it <container> ls -la /opt/opsorch/plugins/

# Verify plugin path
docker exec -it <container> env | grep OPSORCH_

# Test plugin directly
docker exec -it <container> /opt/opsorch/plugins/ticketplugin

# Check logs
docker logs <container>`}
                                </CodeBlock>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-white">Configuration Validation Errors</h3>
                            <p className="mt-2 text-slate-300">
                                <strong>Symptom:</strong> Plugin loads but API calls fail with authentication errors
                            </p>
                            <div className="mt-4">
                                <CodeBlock language="bash">
                                    {`# Validate JSON syntax
echo $OPSORCH_TICKET_CONFIG | jq .

# Check required fields
echo $OPSORCH_TICKET_CONFIG | jq 'has("apiToken") and has("email")'

# Test credentials manually (Jira example)
curl -u 'email:apiToken' \\
  "https://your-domain.atlassian.net/rest/api/3/myself"`}
                                </CodeBlock>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-white">Common Error Messages</h3>
                            <div className="mt-4 overflow-x-auto">
                                <table className="min-w-full text-sm text-slate-300">
                                    <thead>
                                        <tr className="border-b border-slate-700 text-left">
                                            <th className="px-3 py-2 text-[#72e0e0]">Error</th>
                                            <th className="px-3 py-2 text-[#72e0e0]">Meaning</th>
                                            <th className="px-3 py-2 text-[#72e0e0]">Solution</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800">
                                        <tr>
                                            <td className="px-3 py-2 font-mono">provider_missing</td>
                                            <td className="px-3 py-2">No plugin configured</td>
                                            <td className="px-3 py-2">Set OPSORCH_&#123;CAP&#125;_PLUGIN env var</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3 py-2 font-mono">plugin_not_found</td>
                                            <td className="px-3 py-2">Binary doesn&apos;t exist</td>
                                            <td className="px-3 py-2">Check file path and permissions</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3 py-2 font-mono">auth_failed</td>
                                            <td className="px-3 py-2">Invalid credentials</td>
                                            <td className="px-3 py-2">Verify API tokens in config</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3 py-2 font-mono">invalid_config</td>
                                            <td className="px-3 py-2">Missing required fields</td>
                                            <td className="px-3 py-2">Check adapter README</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Best Practices */}
                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Production Best Practices</h2>

                    <div className="mt-6 space-y-6">
                        <div>
                            <h3 className="font-semibold text-white">Security</h3>
                            <ul className="mt-3 space-y-2 text-slate-300">
                                <li className="flex gap-3">
                                    <span className="text-[#72e0e0]">✓</span>
                                    <span>Never commit secrets to Docker images - inject at runtime</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#72e0e0]">✓</span>
                                    <span>Use Kubernetes Secrets or vault for credential management</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#72e0e0]">✓</span>
                                    <span>Run containers as non-root user when possible</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#72e0e0]">✓</span>
                                    <span>Scan images for vulnerabilities with <code>docker scan</code> or <code>trivy</code></span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-white">Versioning</h3>
                            <ul className="mt-3 space-y-2 text-slate-300">
                                <li className="flex gap-3">
                                    <span className="text-[#72e0e0]">✓</span>
                                    <span>Pin versions for core image and adapter plugins</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#72e0e0]">✓</span>
                                    <span>Use semantic versioning for your custom images</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#72e0e0]">✓</span>
                                    <span>Tag images with git commit SHA for traceability</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-white">Health Checks</h3>
                            <div className="mt-3">
                                <CodeBlock language="dockerfile">
                                    {`HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \\
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/health || exit 1`}
                                </CodeBlock>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-white">Resource Limits</h3>
                            <div className="mt-3">
                                <CodeBlock language="yaml">
                                    {`resources:
  limits:
    memory: 512M
    cpus: '0.5'
  reservations:
    memory: 256M
    cpus: '0.25'`}
                                </CodeBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Next Steps */}
                <section className="opsorch-card border-[#1f3c43] p-8">
                    <h2 className="text-2xl font-semibold text-white">Next Steps</h2>
                    <ul className="mt-6 space-y-3 text-slate-300">
                        <li className="flex gap-3">
                            <span className="text-[#72e0e0]">→</span>
                            <span>
                                Review the{" "}
                                <Link href="https://github.com/OpsOrch/.github/blob/main/profile/BUILDING_WITH_ADAPTERS.md" className="text-[#72e0e0] hover:underline" target="_blank">
                                    complete guide on GitHub
                                </Link>{" "}
                                for more examples
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-[#72e0e0]">→</span>
                            <span>
                                Check{" "}
                                <Link href="https://github.com/orgs/OpsOrch/repositories?q=adapter" className="text-[#72e0e0] hover:underline" target="_blank">
                                    adapter repositories
                                </Link>{" "}
                                for detailed configuration options
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-[#72e0e0]">→</span>
                            <span>
                                <Link href="/docs/installation" className="text-[#72e0e0] hover:underline">
                                    Deploy to Kubernetes
                                </Link>{" "}
                                with Helm charts
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-[#72e0e0]">→</span>
                            <span>
                                Join{" "}
                                <Link href="https://github.com/orgs/OpsOrch/discussions" className="text-[#72e0e0] hover:underline" target="_blank">
                                    GitHub Discussions
                                </Link>{" "}
                                for community support
                            </span>
                        </li>
                    </ul>
                </section>
            </div >
        </div >
    );
}
