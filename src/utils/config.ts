// UGI-specific agent configuration
import outputs from '@/../amplify_outputs.json';

type BaseAgent = {
    name: string
    samplePrompts: string[]
    source: 'bedrockAgent' | 'graphql'
}

export type BedrockAgent = BaseAgent & {
    source: "bedrockAgent"
    agentId: string
    agentAliasId: string
}

export type LangGraphAgent = BaseAgent & {
    source: "graphql"
    invokeFieldName: string
}

export const defaultAgents: { [key: string]: BaseAgent | BedrockAgent | LangGraphAgent } = {
    UGIOperationsAgent: {
        name: `UGI Operations Agent`,
        source: `graphql`,
        samplePrompts: [
            `Show me all natural gas pipeline maintenance activities in Luzerne County for the past 30 days.`,
            `What is the average response time for electric outages across our Pennsylvania service territory?`,
            `Analyze natural gas consumption patterns for residential customers in our Maryland service area.`,
            `Generate a report on pipeline integrity inspections due in the next quarter.`,
            `What are the current operational metrics for our natural gas distribution system?`
        ]
    },
    UGIAssetManagementAgent: {
        name: "UGI Asset Management Agent",
        source: "bedrockAgent",
        agentId: outputs.custom.maintenanceAgentId,
        agentAliasId: outputs.custom.maintenanceAgentAliasId,
        samplePrompts: [
            "How many natural gas compressor stations require maintenance this month?",
            "Show me all electric substations with pending inspection work orders.",
            "What is the maintenance schedule for our pipeline network in the next 90 days?",
            "List all equipment that has exceeded its recommended service interval.",
            "Generate a preventive maintenance report for our electric distribution infrastructure.",
            "Which maintenance crews have the best completion rates for pipeline work?"
        ],
    } as BedrockAgent,
    UGISafetyComplianceAgent: {
        name: "UGI Safety & Compliance Agent",
        source: "bedrockAgent",
        agentId: outputs.custom.regulatoryAgentId,
        agentAliasId: outputs.custom.regulatoryAgentAliasId,
        samplePrompts: [
            "What are the current Pennsylvania PUC requirements for natural gas pipeline inspections?",
            "Show me our compliance status for electric utility safety regulations.",
            "What are the reporting requirements for natural gas leak detection in Pennsylvania?",
            "Generate a summary of recent safety incidents and corrective actions taken.",
            "What are the federal requirements for pipeline integrity management?"
        ],
    } as BedrockAgent,
    UGICustomerServiceAgent: {
        name: "UGI Customer Service Agent",
        source: "bedrockAgent",
        agentId: outputs.custom.petrophysicsAgentId,
        agentAliasId: outputs.custom.petrophysicsAgentAliasId,
        samplePrompts: [
            "How many customer service requests were received in the past week?",
            "What are the most common customer inquiries about natural gas service?",
            "Show me the average resolution time for electric outage reports.",
            "Generate a report on customer satisfaction metrics for our service territory.",
            "What percentage of customers are enrolled in budget billing programs?"
        ],
    } as BedrockAgent
}
