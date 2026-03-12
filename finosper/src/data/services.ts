export interface ServiceData {
    slug: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    whoNeedsThis: string;
    whyImportant: string;
    benefits: { title: string; description: string }[];
    documents: string[];
    process: { title: string; description: string }[];
    faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceData[] = [
    {
        slug: "gst-registration",
        title: "GST Registration",
        shortDescription:
            "Get your business GST-registered quickly and hassle-free with expert CA guidance.",
        longDescription:
            "Goods and Services Tax (GST) registration is mandatory for businesses exceeding the prescribed turnover threshold in India. Our team handles the entire process — from document collection to GSTIN activation — ensuring a smooth and error-free registration experience.",
        whoNeedsThis:
            "Any business or individual whose aggregate turnover exceeds ₹20 lakh (₹10 lakh for special category states), inter-state suppliers, e-commerce operators, and those required to deduct TDS/TCS under GST.",
        whyImportant:
            "GST registration is a legal requirement for eligible businesses in India. Operating without registration can attract penalties of up to 100% of the tax due. A valid GSTIN also enhances business credibility and enables you to claim input tax credits.",
        benefits: [
            { title: "Legal Compliance", description: "Avoid penalties and legal issues by registering under GST as mandated by Indian tax law." },
            { title: "Input Tax Credit", description: "Claim credits on taxes paid on purchases and reduce your overall tax liability." },
            { title: "Business Credibility", description: "A GSTIN adds legitimacy to your business and builds trust with clients and vendors." },
            { title: "Interstate Trade", description: "Enable seamless inter-state trade and supply of goods and services across India." },
            { title: "E-Commerce Eligibility", description: "Mandatory for selling on platforms like Amazon, Flipkart, and other marketplaces." },
            { title: "Quick Turnaround", description: "We process your registration in 3–7 working days with zero errors." },
        ],
        documents: [
            "PAN Card of the business / proprietor",
            "Aadhaar Card of the authorized signatory",
            "Proof of business registration (Partnership Deed, Certificate of Incorporation, etc.)",
            "Address proof of the principal place of business (Electricity bill, Rent agreement)",
            "Bank account statement or cancelled cheque",
            "Passport-size photograph of the promoter/partner",
            "Digital signature (for companies and LLPs)",
            "Authorization letter or Board Resolution",
        ],
        process: [
            { title: "Initial Consultation", description: "We assess your business type, turnover, and GST applicability to determine the right registration category." },
            { title: "Document Collection", description: "Our team collects and verifies all required documents, ensuring completeness before filing." },
            { title: "Application Filing", description: "We prepare and submit the GST registration application on the government portal with accuracy." },
            { title: "ARN & Verification", description: "You receive an Application Reference Number (ARN) and we handle any queries from the department." },
            { title: "GSTIN Issued", description: "Once approved, your GSTIN certificate is issued and you're ready to start billing under GST." },
        ],
        faqs: [
            { question: "How long does GST registration take?", answer: "Typically 3–7 working days from the date of application submission, provided all documents are in order and no queries are raised by the officer." },
            { question: "Is GST registration mandatory for all businesses?", answer: "No, it's mandatory only if your aggregate turnover exceeds ₹20 lakh (₹10 lakh for NE and hill states), or if you're involved in inter-state supply, e-commerce, or are required to pay tax under reverse charge." },
            { question: "Can I register for GST voluntarily?", answer: "Yes, any business can voluntarily register for GST regardless of turnover. This is often beneficial to claim input tax credits and enhance credibility." },
            { question: "What happens if I don't register despite being eligible?", answer: "Operating without mandatory GST registration can result in a penalty of 10% of the tax due or ₹10,000, whichever is higher, along with interest on the tax amount." },
            { question: "Do I need separate GST registration for each state?", answer: "Yes, if you have a place of business in multiple states, you need separate GST registration for each state where you operate." },
        ],
    },
    {
        slug: "gst-filing",
        title: "GST Filing & Returns",
        shortDescription:
            "Timely and accurate GST return filing — GSTR-1, GSTR-3B, annual returns and reconciliation.",
        longDescription:
            "GST return filing is a periodic obligation for every registered taxpayer. Missing deadlines or filing incorrect returns can lead to interest charges, penalties, and loss of input tax credit. Our expert team ensures your GST returns are filed accurately and on time, every time.",
        whoNeedsThis:
            "Every GST-registered business — whether regular taxpayer, composition dealer, or those under specific schemes — must file periodic returns as per the applicable schedule.",
        whyImportant:
            "Timely GST filing is critical to avoid late fees of ₹50/day (₹20 for NIL returns), maintain input tax credit eligibility, and ensure your business remains in good compliance standing with the government.",
        benefits: [
            { title: "On-Time Filing", description: "We ensure all your GST returns are filed before the due date, every single month." },
            { title: "ITC Optimization", description: "Maximize your input tax credit claims through proper matching and reconciliation." },
            { title: "Error-Free Returns", description: "Our CA-reviewed process eliminates mistakes that could trigger scrutiny or notices." },
            { title: "Annual Return Support", description: "Complete support for GSTR-9 and GSTR-9C annual return and audit reconciliation." },
            { title: "Notice Handling", description: "Expert assistance in responding to GST notices, queries, and assessment proceedings." },
            { title: "Real-Time Updates", description: "Stay informed about filing status, due dates, and compliance changes." },
        ],
        documents: [
            "Sales and purchase invoices for the filing period",
            "Credit and debit notes issued",
            "Bank statements for the filing period",
            "Previous period GST return copies",
            "Details of advances received and adjusted",
            "HSN-wise summary of outward and inward supplies",
            "E-way bills generated during the period",
        ],
        process: [
            { title: "Data Collection", description: "We gather all your invoices, credit notes, and transaction data for the filing period." },
            { title: "Reconciliation", description: "Match purchase data with GSTR-2A/2B auto-populated data to ensure ITC accuracy." },
            { title: "Return Preparation", description: "Prepare GSTR-1 (outward supplies) and GSTR-3B (summary return) with detailed review." },
            { title: "Filing & Payment", description: "File returns on the GST portal and compute tax liability for timely payment." },
        ],
        faqs: [
            { question: "What GST returns do I need to file monthly?", answer: "Regular taxpayers need to file GSTR-1 (by 11th of the following month) and GSTR-3B (by 20th of the following month). Composition dealers file CMP-08 quarterly." },
            { question: "What is the penalty for late GST filing?", answer: "Late filing attracts a fee of ₹50/day (₹25 CGST + ₹25 SGST) for regular returns, and ₹20/day for NIL returns, subject to a maximum cap." },
            { question: "Can I revise a GST return after filing?", answer: "GST returns cannot be revised once filed. However, corrections can be made in subsequent period returns through amendments and credit/debit notes." },
            { question: "What is GSTR-9 and when is it due?", answer: "GSTR-9 is the annual return due by 31st December of the following financial year. It consolidates all monthly/quarterly returns filed during the year." },
            { question: "Do you handle GST reconciliation?", answer: "Yes, we perform detailed reconciliation between your books, GSTR-1, GSTR-3B, and GSTR-2A/2B to identify and resolve mismatches before filing." },
        ],
    },
    {
        slug: "income-tax-filing",
        title: "Income Tax Filing",
        shortDescription:
            "Hassle-free ITR filing for individuals, HUFs, firms, and corporates with maximum refund optimization.",
        longDescription:
            "Filing your Income Tax Return (ITR) correctly is essential to stay compliant with Indian tax laws and claim legitimate deductions. Whether you're a salaried professional, freelancer, business owner, or an NRI, we ensure your ITR is filed accurately with maximum tax-saving opportunities.",
        whoNeedsThis:
            "Individuals with income above the basic exemption limit, HUFs, businesses, professionals, anyone with capital gains, foreign income or assets, and those seeking refunds on TDS deducted.",
        whyImportant:
            "Non-filing or incorrect filing of ITR can result in penalties up to ₹10,000, loss of carry-forward of losses, and difficulties in obtaining loans, visas, and financial products. A properly filed ITR serves as proof of income and financial standing.",
        benefits: [
            { title: "Maximum Deductions", description: "We identify all applicable deductions under Section 80C, 80D, HRA, and other provisions to minimize your tax." },
            { title: "Refund Processing", description: "Ensure swift refund claims for excess TDS deducted by employers, banks, or other deductors." },
            { title: "Correct ITR Form", description: "We select the right ITR form (ITR-1 to ITR-7) based on your income sources and taxpayer category." },
            { title: "Tax Notice Support", description: "Expert handling of any notices from the Income Tax department post-filing." },
            { title: "Capital Gains Reporting", description: "Accurate reporting of capital gains from stocks, mutual funds, property, and other investments." },
            { title: "NRI Tax Filing", description: "Specialized ITR filing services for Non-Resident Indians with Indian income sources." },
        ],
        documents: [
            "PAN Card and Aadhaar Card",
            "Form 16 / 16A from employer or deductor",
            "Bank statements and interest certificates",
            "Investment proofs (PPF, ELSS, LIC, NPS, etc.)",
            "Rent receipts and HRA details",
            "Capital gains statements from brokers",
            "Details of other income (rental, freelance, etc.)",
            "Previous year ITR acknowledgement",
            "Form 26AS / AIS (Annual Information Statement)",
        ],
        process: [
            { title: "Income Assessment", description: "We review all your income sources — salary, business, capital gains, house property, and other income." },
            { title: "Deduction Planning", description: "Identify all eligible deductions and exemptions to compute the lowest possible tax liability." },
            { title: "ITR Preparation", description: "Prepare the correct ITR form with all schedules, disclosures, and tax computations." },
            { title: "Review & Filing", description: "CA-reviewed filing on the Income Tax portal with e-verification for instant processing." },
            { title: "Post-Filing Support", description: "Track refund status, respond to any notices, and provide ITR-V acknowledgement." },
        ],
        faqs: [
            { question: "What is the deadline for filing ITR?", answer: "For individuals and non-audit cases, the due date is typically 31st July. For businesses requiring audit, it's 31st October. Belated returns can be filed until 31st December." },
            { question: "Can I file ITR if I missed the deadline?", answer: "Yes, you can file a belated return under Section 139(4) before the end of the assessment year, but a late filing fee of up to ₹5,000 may apply." },
            { question: "Which ITR form should I file?", answer: "It depends on your income sources. Salaried individuals typically file ITR-1 or ITR-2, businesses file ITR-3 or ITR-4, and companies file ITR-6. We help you select the correct form." },
            { question: "How long does it take to get a refund?", answer: "Income tax refunds are typically processed within 20–45 days of e-verification. Delays may occur if there are discrepancies in the return." },
            { question: "Do I need to file ITR if my income is below the taxable limit?", answer: "While not mandatory, filing ITR is recommended as it serves as proof of income for loans, visas, and financial transactions. It also helps carry forward losses." },
        ],
    },
    {
        slug: "tax-planning",
        title: "Tax Planning",
        shortDescription:
            "Strategic tax planning to legally minimize your tax liability and maximize savings year-round.",
        longDescription:
            "Effective tax planning is not about tax evasion — it's about making smart, legal financial decisions that reduce your tax burden. Our expert CA team analyzes your income structure, investments, and financial goals to create a personalized tax-saving strategy aligned with current Indian tax laws.",
        whoNeedsThis:
            "High-income individuals, business owners, professionals, HNIs, startups planning equity structures, and anyone looking to optimize their tax outflow through legitimate means.",
        whyImportant:
            "Without proper planning, you could be paying significantly more tax than necessary. Strategic tax planning helps you retain more of your earnings, make tax-efficient investments, and ensure long-term financial security.",
        benefits: [
            { title: "Legal Tax Savings", description: "We utilize all available deductions, exemptions, and provisions under the Income Tax Act to save you money legally." },
            { title: "Investment Guidance", description: "Recommendations on tax-saving investments like ELSS, NPS, PPF, and health insurance for optimal returns." },
            { title: "Salary Restructuring", description: "Optimize your salary structure to maximize HRA, LTA, and other tax-free components." },
            { title: "Business Tax Strategy", description: "Strategic planning for business expenses, depreciation, and deductions to minimize business tax." },
            { title: "Regime Comparison", description: "Detailed analysis of Old vs New Tax Regime to help you choose the most beneficial option." },
            { title: "Year-Round Support", description: "Proactive tax planning throughout the year, not just at the end of the financial year." },
        ],
        documents: [
            "Previous 2–3 years' ITR copies",
            "Current year salary slips or income details",
            "Investment portfolio details",
            "Existing insurance policies and premium receipts",
            "Loan EMI details (home loan, education loan)",
            "Business financial statements (if applicable)",
            "Details of rental income or other income sources",
        ],
        process: [
            { title: "Financial Review", description: "Comprehensive review of your income sources, existing investments, and current tax position." },
            { title: "Strategy Development", description: "Create a customized tax-saving strategy based on your financial goals and risk appetite." },
            { title: "Implementation", description: "Guide you through the investment and restructuring decisions to execute the plan." },
            { title: "Quarterly Review", description: "Periodic check-ins to adjust the strategy based on income changes and new regulations." },
        ],
        faqs: [
            { question: "When should I start tax planning?", answer: "Ideally at the beginning of the financial year (April). Early planning gives you more time to make investments and restructure income for maximum savings." },
            { question: "What's the difference between tax planning and tax evasion?", answer: "Tax planning uses legal methods and provisions under the law to minimize tax. Tax evasion is illegal concealment of income. We only practice and recommend legal tax planning." },
            { question: "Should I choose the Old or New Tax Regime?", answer: "It depends on your deductions and exemptions. If your total deductions exceed ₹3–4 lakh, the old regime may be better. We do a detailed comparison for your specific case." },
            { question: "Can tax planning help me save on capital gains?", answer: "Yes, through strategies like tax-loss harvesting, Section 54 exemptions for property gains, and long-term holding of equity investments to qualify for LTCG benefits." },
            { question: "How much can I save through proper tax planning?", answer: "Savings vary based on income and situation, but structured planning can save anywhere from ₹25,000 to several lakhs annually for high-income individuals and businesses." },
        ],
    },
    {
        slug: "company-incorporation",
        title: "Company Incorporation",
        shortDescription:
            "End-to-end company registration — Private Limited, LLP, OPC, and partnership firm setup.",
        longDescription:
            "Whether you're launching a startup or formalizing an existing business, choosing the right business structure and getting it legally registered is crucial. We handle the complete incorporation process — from name reservation to certificate of incorporation — with expert guidance on the best entity type for your goals.",
        whoNeedsThis:
            "Entrepreneurs, startup founders, freelancers looking to formalize their business, partnership firms seeking LLP conversion, and anyone planning to establish a legal business entity in India.",
        whyImportant:
            "A properly incorporated company provides limited liability protection, enhances credibility with investors and clients, enables easier access to funding, and ensures you're operating within the legal framework. It's the foundation of a scalable business.",
        benefits: [
            { title: "Entity Selection", description: "Expert advice on choosing between Pvt Ltd, LLP, OPC, or Partnership based on your specific needs." },
            { title: "Limited Liability", description: "Protect your personal assets by establishing a separate legal entity for your business." },
            { title: "Investor Ready", description: "A registered company structure makes it easier to raise funding from investors and VCs." },
            { title: "Tax Advantages", description: "Benefit from corporate tax rates and deductions available specifically to registered companies." },
            { title: "Brand Protection", description: "A registered entity name is legally protected and adds credibility to your brand." },
            { title: "Complete Compliance", description: "We set up your PAN, TAN, GST, bank account, and initial compliance from day one." },
        ],
        documents: [
            "PAN Card and Aadhaar Card of all directors/partners",
            "Passport-size photographs of all directors/partners",
            "Address proof of directors/partners (Voter ID, Passport, or Driving License)",
            "Proposed company name (2–3 options)",
            "Registered office address proof (Rent agreement + NOC from owner + Utility bill)",
            "Digital Signature Certificate (DSC) for all directors",
            "Memorandum of Association (MOA) and Articles of Association (AOA)",
            "Director Identification Number (DIN) application details",
        ],
        process: [
            { title: "Entity Consultation", description: "We help you choose the right business structure based on your goals, funding plans, and compliance appetite." },
            { title: "Name Reservation", description: "Apply for company name approval through RUN (Reserve Unique Name) on the MCA portal." },
            { title: "Document Preparation", description: "Draft MOA, AOA and prepare all incorporation documents with proper attestation." },
            { title: "Incorporation Filing", description: "File SPICe+ form on MCA portal with all required documents and DSCs." },
            { title: "Post-Incorporation", description: "Receive Certificate of Incorporation, PAN, TAN, and assist with bank account opening and GST registration." },
        ],
        faqs: [
            { question: "How long does company incorporation take?", answer: "Typically 7–15 working days from document submission, depending on name availability and MCA processing time. We aim for the fastest turnaround." },
            { question: "What is the minimum capital required to start a company?", answer: "There is no minimum paid-up capital requirement for Private Limited companies in India. You can start with as little as ₹1,00,000 or even less." },
            { question: "What's the difference between Pvt Ltd and LLP?", answer: "A Pvt Ltd company has shareholders and directors with more compliance requirements but is preferred by investors. An LLP is simpler, suitable for professional services, with lower compliance costs." },
            { question: "Can a single person incorporate a company?", answer: "Yes, through a One Person Company (OPC). It requires only one director and one nominee, providing limited liability to a sole entrepreneur." },
            { question: "What compliances are required after incorporation?", answer: "Annual ROC filings, board meetings, statutory audit (for Pvt Ltd), GST returns, TDS returns, income tax filing, and maintaining statutory registers are key post-incorporation compliances." },
        ],
    },
    {
        slug: "compliance-advisory",
        title: "Compliance & Advisory",
        shortDescription:
            "Stay compliant with ROC filings, annual returns, statutory audits, and regulatory advisory.",
        longDescription:
            "Maintaining ongoing statutory compliance is essential for every business entity. From ROC annual filings and board meeting requirements to statutory audits and regulatory changes, our compliance advisory service ensures your business stays on the right side of the law at all times.",
        whoNeedsThis:
            "All registered companies (Pvt Ltd, Public, OPC), LLPs, trusts, and NGOs that have ongoing statutory compliance obligations under the Companies Act, LLP Act, or other regulatory frameworks.",
        whyImportant:
            "Non-compliance can result in heavy penalties, disqualification of directors, striking off of company name, and even prosecution. Regular compliance also maintains your company's active status and good standing for future transactions.",
        benefits: [
            { title: "Complete Coverage", description: "We track and manage all your compliance deadlines — ROC, GST, IT, TDS, and more — in one place." },
            { title: "Penalty Prevention", description: "Avoid late filing penalties and interest charges that can accumulate significantly over time." },
            { title: "Director Protection", description: "Ensure directors are not disqualified due to company's non-compliance with filing requirements." },
            { title: "Audit Readiness", description: "Maintain records and filings so your company is always ready for statutory or tax audits." },
            { title: "Regulatory Updates", description: "Stay informed about regulatory changes, new compliance requirements, and government notifications." },
            { title: "Dedicated Support", description: "A dedicated compliance manager assigned to your company for personalized service." },
        ],
        documents: [
            "Certificate of Incorporation / LLP Agreement",
            "Board resolutions and meeting minutes",
            "Financial statements (Balance Sheet, P&L, Cash Flow)",
            "Auditor's report",
            "Director KYC details (updated annually)",
            "Share transfer details (if any)",
            "Details of charges created or modified",
            "Previous year's ROC filing receipts",
        ],
        process: [
            { title: "Compliance Audit", description: "We review your current compliance status and identify any pending filings or gaps." },
            { title: "Calendar Setup", description: "Create a compliance calendar with all due dates for ROC, GST, IT, TDS, and other filings." },
            { title: "Ongoing Filings", description: "Handle all periodic filings — AOC-4, MGT-7, DIR-3 KYC, ADT-1, and other applicable forms." },
            { title: "Advisory Support", description: "Proactive advisory on regulatory changes, board meeting requirements, and corporate governance." },
        ],
        faqs: [
            { question: "What happens if I miss ROC annual filing?", answer: "Late filing attracts additional fees of ₹100/day for each form. Prolonged non-filing can lead to company being marked as 'Active non-compliant' or even struck off from the register." },
            { question: "What annual filings are required for a Pvt Ltd company?", answer: "Key annual filings include AOC-4 (financial statements), MGT-7/7A (annual return), DIR-3 KYC (director verification), ADT-1 (auditor appointment), and income tax return." },
            { question: "Do I need a statutory audit for my company?", answer: "Yes, all Private Limited and Public companies in India must undergo a mandatory statutory audit regardless of turnover. LLPs with turnover above ₹40 lakh or contribution above ₹25 lakh also require audit." },
            { question: "Can you handle compliance for multiple entities?", answer: "Absolutely. We manage compliance for groups of companies, subsidiaries, and multiple entities under a single engagement, providing consolidated oversight and reporting." },
            { question: "How do I know if my company is compliant?", answer: "We conduct a thorough compliance health check covering all statutory requirements and provide a detailed report highlighting the status of each obligation." },
        ],
    },
    {
        slug: "accounting-bookkeeping",
        title: "Accounting & Bookkeeping",
        shortDescription:
            "Accurate bookkeeping, financial statements, and accounts management for your business.",
        longDescription:
            "Sound accounting is the backbone of every successful business. Our accounting and bookkeeping services ensure your financial records are accurate, up-to-date, and compliant with Indian Accounting Standards. From daily transaction recording to comprehensive financial reports, we've got your books covered.",
        whoNeedsThis:
            "Small and medium businesses, startups, freelancers, e-commerce sellers, and professionals who need reliable bookkeeping but don't want the overhead of a full-time accountant.",
        whyImportant:
            "Accurate books are essential for GST returns, income tax filing, statutory audits, loan applications, investor due diligence, and day-to-day business decision-making. Poor bookkeeping leads to wrong filings, missed deductions, and compliance issues.",
        benefits: [
            { title: "Accurate Records", description: "Maintain error-free books that are always audit-ready and compliant with accounting standards." },
            { title: "Cloud-Based Access", description: "Access your financial data anytime, anywhere through modern cloud accounting platforms." },
            { title: "Cost Effective", description: "Save on full-time accountant costs while getting professional-grade bookkeeping services." },
            { title: "Monthly Reports", description: "Receive clear monthly P&L statements, balance sheets, and cash flow reports for informed decisions." },
            { title: "Tax-Ready Books", description: "Books maintained in a format that simplifies GST, TDS, and income tax filing without last-minute rushes." },
            { title: "Scalable Service", description: "Whether you have 50 or 5,000 transactions a month, our service scales with your business." },
        ],
        documents: [
            "Bank statements for all business accounts",
            "Sales and purchase invoices",
            "Expense receipts and bills",
            "Payroll details and salary slips",
            "Loan agreements and EMI schedules",
            "Previous year's financial statements",
            "Asset purchase/sale documents",
            "Credit card statements (business cards)",
        ],
        process: [
            { title: "Setup & Migration", description: "Set up your accounting system (Tally, Zoho Books, or QuickBooks) and migrate existing data if needed." },
            { title: "Daily/Weekly Entries", description: "Record all business transactions — sales, purchases, expenses, receipts, and payments — systematically." },
            { title: "Reconciliation", description: "Monthly bank reconciliation and ledger verification to ensure accuracy of all records." },
            { title: "Reporting", description: "Generate monthly financial statements, cash flow reports, and customized MIS reports for your business." },
        ],
        faqs: [
            { question: "What accounting software do you use?", answer: "We work with Tally Prime, Zoho Books, QuickBooks, and other leading platforms. We'll recommend the best fit based on your business size and needs." },
            { question: "How often will my books be updated?", answer: "Depending on your plan, we update books daily, weekly, or bi-weekly. Monthly statements and reports are delivered by the 10th of the following month." },
            { question: "Can you handle multi-currency accounting?", answer: "Yes, we manage multi-currency transactions for businesses dealing with international clients and vendors, ensuring proper exchange rate recording and compliance." },
            { question: "Do I need to visit your office?", answer: "No, our entire bookkeeping process is remote and cloud-based. You can share documents digitally and access your books online anytime." },
            { question: "Is my financial data secure?", answer: "Absolutely. We use encrypted cloud platforms, secure data sharing methods, and maintain strict confidentiality agreements to protect your financial information." },
        ],
    },
    {
        slug: "startup-consultancy",
        title: "Startup Consultancy",
        shortDescription:
            "Expert guidance for startups — funding readiness, DPIIT registration, and financial structuring.",
        longDescription:
            "Launching a startup is exciting but comes with complex financial and regulatory challenges. From choosing the right business structure and getting DPIIT recognition to building a strong financial foundation for fundraising, our startup consultancy service provides comprehensive guidance to help your venture succeed.",
        whoNeedsThis:
            "First-time entrepreneurs, early-stage startups, bootstrapped founders, MSMEs seeking formalization, and startups preparing for angel or VC funding rounds.",
        whyImportant:
            "A strong financial and compliance foundation from day one saves startups from costly restructuring later. DPIIT recognition provides tax benefits, easier IPR filing, and access to government schemes. Proper financial structuring is critical for investor confidence.",
        benefits: [
            { title: "DPIIT Registration", description: "Get Startup India recognition for tax benefits, easier compliance, and access to government schemes." },
            { title: "Funding Readiness", description: "Prepare financial projections, cap tables, and documentation that investors expect to see." },
            { title: "MSME Registration", description: "Udyam registration for your startup to access priority lending, subsidies, and government tenders." },
            { title: "Financial Structuring", description: "Design optimal equity structure, ESOP pools, and convertible instruments for growth stage." },
            { title: "Tax Benefits", description: "Leverage Section 80-IAC tax holiday and other benefits available to recognized startups in India." },
            { title: "Compliance Setup", description: "Set up complete compliance framework — accounting, GST, TDS, and regulatory filings from day one." },
        ],
        documents: [
            "Business plan or pitch deck",
            "Certificate of Incorporation",
            "PAN and GST registration details",
            "Details of founders and their shareholding",
            "Product/service description and business model",
            "Financial projections (if available)",
            "Previous funding details (if any)",
            "Trademark or IP documentation (if any)",
        ],
        process: [
            { title: "Discovery Call", description: "Understand your startup's stage, vision, business model, and immediate financial needs." },
            { title: "Structure & Register", description: "Help with entity selection, incorporation, DPIIT recognition, and MSME registration." },
            { title: "Financial Foundation", description: "Set up accounting systems, compliance calendar, and create financial projections and models." },
            { title: "Growth Support", description: "Ongoing advisory on tax planning, fundraising readiness, and scaling compliance as you grow." },
        ],
        faqs: [
            { question: "What is DPIIT recognition and why should I get it?", answer: "DPIIT (Department for Promotion of Industry and Internal Trade) recognition certifies your startup under Startup India, providing tax exemption under Section 80-IAC, self-certification for labour and environment laws, easier public procurement, and fast-tracked patent applications." },
            { question: "Can you help with fundraising?", answer: "While we don't raise funds directly, we prepare your startup for funding by creating proper financial projections, cap tables, valuations, and ensuring your books and compliance are investor-ready." },
            { question: "What tax benefits do recognized startups get?", answer: "Recognized startups can avail tax holiday under Section 80-IAC (100% deduction of profits for 3 out of 10 years), exemption from angel tax under Section 56(2)(viib), and carry forward of losses." },
            { question: "When should a startup hire a CA?", answer: "From day one! Early engagement with a CA helps you set up the right structure, maintain proper books, and avoid costly compliance mistakes that can hurt during fundraising or audits." },
            { question: "Do you work with bootstrapped startups?", answer: "Absolutely. We have flexible plans designed for bootstrapped and early-stage startups with limited budgets. We believe in growing together with our clients." },
        ],
    },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
    return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
    return servicesData.map((s) => s.slug);
}
