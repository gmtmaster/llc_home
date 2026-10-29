import { ArrowLeft, ArrowUpRight } from "lucide-react";

const sections = [
  ["scope", "Scope"],
  ["controller", "Who is responsible"],
  ["information", "Information and purposes"],
  ["cookies", "Cookies and tracking"],
  ["providers", "Service providers"],
  ["transfers", "International transfers"],
  ["retention", "Retention"],
  ["security", "Security"],
  ["rights", "Your privacy rights"],
  ["us", "United States residents"],
  ["children", "Children’s privacy"],
  ["links", "External services"],
  ["updates", "Changes and contact"],
];

export default function PrivacyNotice() {
  return (
    <div className="maestral-site privacy-page">
      <header className="site-header">
        <div className="page-width header-inner">
          <a href="#top" className="brand">
            <span className="brand-mark" aria-hidden="true">
              m<span>.</span>
            </span>
            <span>Maestral Technologies</span>
          </a>
          <a href="#top" className="privacy-back">
            <ArrowLeft size={16} aria-hidden="true" /> Back to website
          </a>
        </div>
      </header>
      <main className="page-width privacy-main" id="privacy-top">
        <div className="privacy-intro">
          <p className="section-kicker">Legal & privacy</p>
          <h1>Privacy Policy</h1>
          <p className="privacy-subtitle">
            How personal information is handled when you visit the Maestral
            Technologies corporate website or contact its operator.
          </p>
          <p className="privacy-date">
            Effective date:{" "}
            <span className="legal-placeholder">[EFFECTIVE DATE]</span> · Last
            updated:{" "}
            <span className="legal-placeholder">[LAST UPDATED DATE]</span>
          </p>
          <div className="privacy-draft">
            <b>Draft — not finalised</b>
            <p>
              Bracketed fields identify missing details or statements that must
              be verified against the live website configuration before
              publication. This notice covers the corporate website only.
            </p>
          </div>
        </div>
        <div className="privacy-layout">
          <nav className="privacy-toc" aria-label="Privacy policy contents">
            <p>In this notice</p>
            {sections.map(([id, title], i) => (
              <a key={id} href={`#privacy-${id}`}>
                {String(i + 1).padStart(2, "0")}
                <span>{title}</span>
              </a>
            ))}
          </nav>
          <div className="privacy-content">
            <section id="privacy-scope">
              <h2>1. Scope</h2>
              <p>
                This Privacy Policy applies to the Maestral Technologies
                corporate website at{" "}
                <span className="legal-placeholder">[WEBSITE DOMAIN]</span> and
                contact-form submissions and business correspondence initiated
                through its contact channels. “Maestral”, “we”, “us”, and “our”
                refer to the operator identified below.
              </p>
              <p>
                The website introduces Maestral and showcases its products and
                development capabilities. The applications featured on it have
                separate privacy notices. This notice does not cover account
                registration, subscriptions, payment processing, customer
                content, or wearable health-data processing within those
                applications.
              </p>
            </section>
            <section id="privacy-controller">
              <h2>2. Who is responsible</h2>
              <p>
                The controller for the processing described here is{" "}
                <strong>Lekrinszki Ádám E.V.</strong>, a Hungarian sole
                proprietor operating under the Maestral Technologies brand.
              </p>
              <dl className="privacy-details">
                <div>
                  <dt>Registered address</dt>
                  <dd>[REGISTERED BUSINESS ADDRESS, HUNGARY]</dd>
                </div>
                <div>
                  <dt>Registration number</dt>
                  <dd>[SOLE PROPRIETOR REGISTRATION NUMBER]</dd>
                </div>
                <div>
                  <dt>Privacy contact</dt>
                  <dd>[PRIVACY CONTACT EMAIL]</dd>
                </div>
                <div>
                  <dt>Postal contact</dt>
                  <dd>[POSTAL ADDRESS, IF DIFFERENT]</dd>
                </div>
              </dl>
              <p>
                <span className="legal-placeholder">
                  [IF APPLICABLE: INSERT THE DATA PROTECTION OFFICER’S CONTACT
                  DETAILS; OTHERWISE REMOVE THIS LINE.]
                </span>
              </p>
            </section>
            <section id="privacy-information">
              <h2>3. Information we process and why</h2>
              <h3>Website delivery and security</h3>
              <p>
                When you request a page or image, the infrastructure used to
                serve the website receives technical information needed to
                handle the request. Depending on the hosting and security
                configuration, this can include an IP address, request date and
                time, requested URL, browser or device headers, response status,
                and diagnostic information.
              </p>
              <p>
                <span className="legal-placeholder">
                  [CONFIRM THE ACTUAL TECHNICAL DATA PROCESSED AND WHETHER IT IS
                  LOGGED BY THE HOST, CDN, OR SECURITY PROVIDER.]
                </span>
              </p>
              <p>
                The purpose is to deliver the website, diagnose errors, and
                prevent misuse. The GDPR legal basis is legitimate interests
                under Article 6(1)(f): operating a reliable, secure corporate
                website. Any processing based on this ground must be necessary
                and balanced against individuals’ rights.
              </p>
              <h3>Business correspondence</h3>
              <p>
                When you use the contact form, we process your email address,
                message, and name if supplied. Formspree, Inc. receives the
                submission and associated technical information to deliver the
                form service and help prevent spam. Subsequent correspondence
                may include other information you choose to provide. We use this
                information to respond, discuss a project, and manage the
                resulting communication.
              </p>
              <p>
                Where necessary to take steps you request before entering a
                contract with you, the legal basis is Article 6(1)(b) GDPR.
                Other relevant business correspondence is handled under Article
                6(1)(f), reflecting our legitimate interest in responding to
                inquiries and maintaining business relationships. Records
                subject to an identified statutory obligation are retained under
                Article 6(1)(c).
              </p>
              <p>
                Contacting us is voluntary. Without a reply address and enough
                information about your inquiry, we may be unable to respond.
                Please do not send passwords, full payment-card details, or
                unnecessary sensitive information.
              </p>
              <h3>Contact form and website functionality</h3>
              <p>
                The contact form sends your entries to Formspree when you submit
                it. Email and message are required; name is optional. The form
                does not subscribe you to a mailing list, request payment
                information, or create an account. The website does not save
                unfinished form entries to browser storage. Formspree may store
                submissions and forward them to the mailbox configured by
                Maestral.
              </p>
              <p>
                <span className="legal-placeholder">
                  [CONFIRM THE ACTUAL FORMSPREE DASHBOARD RETENTION,
                  NOTIFICATION RECIPIENTS, SPAM-PROTECTION SETTINGS, AND ANY
                  CONFIGURED INTEGRATIONS.]
                </span>
              </p>
              <p>
                Not having an account database does not mean that no personal
                information is processed: technical infrastructure and email
                correspondence can still involve personal data.
              </p>
            </section>
            <section id="privacy-cookies">
              <h2>4. Cookies, analytics, and tracking</h2>
              <p>
                <span className="legal-placeholder">
                  [INSERT THE VERIFIED PRODUCTION COOKIE/STORAGE STATEMENT. IF
                  NONE ARE USED, STATE THAT. OTHERWISE IDENTIFY EACH COOKIE OR
                  STORAGE CATEGORY, PURPOSE, PROVIDER, DURATION, AND ANY
                  REQUIRED CONSENT CONTROLS.]
                </span>
              </p>
              <p>
                <span className="legal-placeholder">
                  [CONFIRM WHETHER HOSTING ANALYTICS, ERROR MONITORING,
                  ADVERTISING PIXELS, THIRD-PARTY EMBEDS, OR SIMILAR TOOLS ARE
                  ENABLED. LIST ONLY THE TOOLS ACTUALLY USED.]
                </span>
              </p>
              <p>
                <span className="legal-placeholder">
                  [CONFIRM: WE DO NOT SELL PERSONAL INFORMATION, SHARE IT FOR
                  CROSS-CONTEXT BEHAVIOURAL ADVERTISING, OR USE IT FOR TARGETED
                  ADVERTISING.]
                </span>
              </p>
              <p>
                <span className="legal-placeholder">
                  [DESCRIBE THE ACTUAL RESPONSE TO GLOBAL PRIVACY CONTROL AND DO
                  NOT TRACK SIGNALS. IF NO SALE, ADVERTISING SHARING, OR
                  TARGETED ADVERTISING OCCURS, EXPLAIN THAT THERE IS NO SUCH
                  ACTIVITY FOR THE SIGNAL TO OPT OUT OF. DO NOT CLAIM
                  SIGNAL-HANDLING SOFTWARE THAT IS NOT IMPLEMENTED.]
                </span>
              </p>
              <p>
                Any optional tracking added later must be reflected here and
                subject to any consent or opt-out controls required by
                applicable law.
              </p>
            </section>
            <section id="privacy-providers">
              <h2>5. Service providers and other recipients</h2>
              <p>
                The providers engaged to deliver the website and handle business
                email may process the information necessary for those services.
              </p>
              <dl className="privacy-details">
                <div>
                  <dt>Hosting / CDN</dt>
                  <dd>
                    [PROVIDER LEGAL NAME, SERVICE, DATA REGION, PRIVACY LINK]
                  </dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    [EMAIL PROVIDER LEGAL NAME, SERVICE, DATA REGION, PRIVACY
                    LINK]
                  </dd>
                </div>
                <div>
                  <dt>Contact-form processing</dt>
                  <dd>
                    Formspree, Inc. — submission handling and spam prevention.{" "}
                    <a
                      href="https://formspree.io/legal/privacy-policy/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Formspree Privacy Policy
                    </a>
                    . [CONFIRM CONTRACTUAL TERMS, SUBPROCESSORS, AND APPLICABLE
                    TRANSFER SAFEGUARDS.]
                  </dd>
                </div>
                <div>
                  <dt>Security / other</dt>
                  <dd>
                    [LIST ANY ADDITIONAL ACTUAL PROVIDERS, OR REMOVE THIS ROW]
                  </dd>
                </div>
              </dl>
              <p>
                Where providers act as processors on our behalf, appropriate
                processing terms must govern their access and use. Some
                providers may act as independent controllers for their own
                specified purposes; their role must be identified accurately.
              </p>
              <p>
                Where necessary and lawful, information may also be disclosed to
                competent authorities, courts, or professional advisers to
                comply with a legal obligation or establish, exercise, or defend
                legal claims. Disclosures are limited to what is necessary for
                the relevant purpose.
              </p>
            </section>
            <section id="privacy-transfers">
              <h2>6. International transfers</h2>
              <p>
                Formspree states that it processes personal information in the
                United States and other countries where it operates. [CONFIRM
                THE ACTUAL TRANSFER BASIS AND AVAILABLE SAFEGUARDS FOR THIS
                ACCOUNT BEFORE PUBLICATION.]
              </p>
              <p>
                <span className="legal-placeholder">
                  [IDENTIFY WHETHER ANY PROVIDER, SUBPROCESSOR, SUPPORT TEAM, OR
                  OTHER RECIPIENT PROCESSES OR ACCESSES PERSONAL DATA OUTSIDE
                  THE EEA. IDENTIFY THE RELEVANT COUNTRIES AND TRANSFER
                  MECHANISMS.]
                </span>
              </p>
              <p>
                Where required, transfers must be supported by a relevant
                adequacy decision or appropriate safeguards, such as applicable
                Standard Contractual Clauses and any necessary supplementary
                measures. The final notice will identify the mechanism actually
                used and how to obtain information about the safeguards through
                the privacy contact. An EU hosting region alone does not
                establish that all processing remains within the EEA.
              </p>
            </section>
            <section id="privacy-retention">
              <h2>7. How long information is kept</h2>
              <p>
                Retention depends on the purpose, any applicable legal
                requirements, and the configuration of the services used.
              </p>
              <dl className="privacy-details">
                <div>
                  <dt>Technical logs</dt>
                  <dd>
                    [ACTUAL RETENTION PERIODS FOR HOSTING, CDN, SECURITY, AND
                    ERROR LOGS; STATE IF A CATEGORY IS NOT RETAINED]
                  </dd>
                </div>
                <div>
                  <dt>General inquiries</dt>
                  <dd>
                    [RETENTION PERIODS AND DELETION CRITERIA FOR FORMSPREE
                    SUBMISSIONS, EMAIL NOTIFICATIONS, AND SUBSEQUENT
                    CORRESPONDENCE]
                  </dd>
                </div>
                <div>
                  <dt>Contract / legal records</dt>
                  <dd>
                    [APPLICABLE STATUTORY OR CLAIM-RELATED PERIODS AND THE
                    RECORDS THEY APPLY TO]
                  </dd>
                </div>
                <div>
                  <dt>Backups</dt>
                  <dd>
                    [BACKUP EXPIRY / DELETION CYCLE AND ANY RESTRICTED
                    RETENTION]
                  </dd>
                </div>
              </dl>
              <p>
                Information no longer needed for a lawful purpose is deleted or
                irreversibly anonymised. If a limited record must be retained
                after a deletion request, its use is restricted to the reason it
                must be kept.
              </p>
            </section>
            <section id="privacy-security">
              <h2>8. Security</h2>
              <p>
                <span className="legal-placeholder">
                  [DESCRIBE THE SAFEGUARDS ACTUALLY IMPLEMENTED, SUCH AS HTTPS,
                  RESTRICTED ADMINISTRATIVE ACCESS, MULTI-FACTOR AUTHENTICATION,
                  AND APPROPRIATE PROVIDER AGREEMENTS. REMOVE ANY UNIMPLEMENTED
                  CLAIM.]
                </span>
              </p>
              <p>
                No internet service can guarantee absolute security. If a
                personal data breach occurs, we assess and address it and
                provide notifications where required by applicable law.
              </p>
            </section>
            <section id="privacy-rights">
              <h2>9. EEA privacy rights</h2>
              <p>
                Subject to the conditions and exceptions in applicable law, you
                may request access to your personal data, correction of
                inaccurate information, erasure, restriction of processing, or
                data portability. You may object to processing based on
                legitimate interests on grounds relating to your particular
                situation. If a specific activity relies on consent, you may
                withdraw that consent without affecting earlier lawful
                processing.
              </p>
              <p>
                Contact{" "}
                <span className="legal-placeholder">
                  [PRIVACY CONTACT EMAIL]
                </span>{" "}
                to make a request. We may seek proportionate information to
                verify your identity, without requesting unnecessary
                identification. Requests under the GDPR are normally answered
                within one month. If a permitted extension is necessary, we
                inform you within the first month and explain the reasons. Any
                refusal is explained together with the available remedies.
              </p>
              <p>
                You may complain to the Hungarian supervisory authority, the{" "}
                <strong>
                  Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)
                </strong>
                , through{" "}
                <a href="https://www.naih.hu/" target="_blank" rel="noreferrer">
                  www.naih.hu <ArrowUpRight size={12} aria-hidden="true" />
                </a>
                . You may also complain to a competent supervisory authority in
                the EEA country where you habitually reside, work, or consider
                an infringement to have occurred.
              </p>
              <p>
                <span className="legal-placeholder">
                  [CONFIRM: THIS CORPORATE WEBSITE DOES NOT MAKE SOLELY
                  AUTOMATED DECISIONS THAT PRODUCE LEGAL OR SIMILARLY
                  SIGNIFICANT EFFECTS ABOUT VISITORS.]
                </span>
              </p>
            </section>
            <section id="privacy-us">
              <h2>10. United States residents</h2>
              <p>
                US privacy rights depend on the state, the processing involved,
                and whether the relevant law applies to the operator. Where
                applicable, these rights may include access, correction,
                deletion, portability, and opting out of sale, targeted
                advertising, or certain profiling. Some state laws also provide
                a right to appeal a privacy-request decision.
              </p>
              <p>
                Requests may be sent to{" "}
                <span className="legal-placeholder">
                  [PRIVACY CONTACT EMAIL]
                </span>
                . We apply the verification, response periods, authorised-agent
                rules, appeal procedures, and exceptions required by the law
                that governs the request. We do not unlawfully discriminate
                against individuals for exercising applicable privacy rights.
              </p>
              <p>
                <span className="legal-placeholder">
                  [COMPLETE THE US STATE-LAW APPLICABILITY ASSESSMENT. IF
                  REQUIRED, INSERT THE SPECIFIC REQUEST AND APPEAL PROCESS,
                  PRIOR-12-MONTH CATEGORY/PURPOSE/RECIPIENT DISCLOSURES, AND ANY
                  ADDITIONAL CALIFORNIA OR OTHER STATE NOTICES. A GENERAL
                  STATEMENT DOES NOT REPLACE THESE DISCLOSURES.]
                </span>
              </p>
            </section>
            <section id="privacy-children">
              <h2>11. Children’s privacy</h2>
              <p>
                <span className="legal-placeholder">
                  [CONFIRM THE INTENDED AUDIENCE AND WHETHER THE SITE IS
                  DIRECTED TO CHILDREN. IF ACCURATE: THIS CORPORATE WEBSITE IS
                  INTENDED FOR A GENERAL BUSINESS AUDIENCE AND IS NOT DIRECTED
                  TO CHILDREN UNDER 13.]
                </span>
              </p>
              <p>
                If you believe a child has provided personal information through
                this website’s contact channels, contact the privacy address so
                that the situation can be assessed and appropriate steps taken.
              </p>
            </section>
            <section id="privacy-links">
              <h2>12. External websites and product services</h2>
              <p>
                Links to external websites, email applications, or separately
                operated services may lead to different privacy practices.
                Review the notice applicable to the destination. Maestral
                remains responsible for its own processing and disclosures.
              </p>
              <p>
                The product screenshots on this corporate site are presentation
                material; viewing them does not connect your device to those
                products or import your health, account, or application data.
                Application-specific collection and integrations must be
                explained in the relevant product’s notice.
              </p>
            </section>
            <section id="privacy-updates">
              <h2>13. Changes and contact</h2>
              <p>
                This notice may be updated when website practices or legal
                requirements change. The current version will show its effective
                and last-updated dates. Material changes will be communicated
                where required. Updating this notice does not by itself provide
                consent for a new processing activity.
              </p>
              <p>
                For privacy questions or requests, contact{" "}
                <span className="legal-placeholder">
                  [PRIVACY CONTACT EMAIL]
                </span>{" "}
                or write to{" "}
                <span className="legal-placeholder">
                  [POSTAL CONTACT ADDRESS]
                </span>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <footer className="studio-footer">
        <div className="page-width footer-inner">
          <a href="#top" className="footer-brand">
            Maestral Technologies<span>.</span>
          </a>
          <a href="#privacy-top">Back to policy top ↑</a>
        </div>
      </footer>
    </div>
  );
}
