import { ArrowLeft, ArrowUpRight } from "lucide-react";

// Complete these publication details before publishing the notice.
// A correspondence address does not replace a legally required registered address.
const publication = {
  website: "www.maestral.tech",
  effectiveDate: "29 October 2026",
  lastUpdated: "30 October 2026",
  operator: "Lekrinszki Ádám E.V.",
  registeredAddress: "[REGISTERED BUSINESS ADDRESS, HUNGARY]",
  mailingAddress: "Hungary - 6230 Soltvadkert, Koltoi Anna utca 186.",
  registrationNumber: "60801649",
  registrationAuthority: "HU",
  taxNumber: "91290038-1-23",
  privacyEmail: "business@maestral.tech",
};
const publicationPending = Object.values(publication).some((value) =>
  value.startsWith("["),
);
const sections = [
  ["scope", "Scope"],
  ["controller", "Operator and controller"],
  ["information", "Information and purposes"],
  ["cookies", "Cookies and tracking"],
  ["providers", "Recipients and providers"],
  ["transfers", "International processing"],
  ["retention", "Retention"],
  ["security", "Security"],
  ["rights", "EEA privacy rights"],
  ["us", "United States residents"],
  ["children", "Children’s privacy"],
  ["links", "Links and product previews"],
  ["updates", "Changes and contact"],
];
const external = { target: "_blank", rel: "noreferrer" };
function PublicationField({ value }: { value: string }) {
  return (
    <span className={value.startsWith("[") ? "legal-placeholder" : undefined}>
      {value}
    </span>
  );
}
function PrivacyEmail() {
  return (
    <a href={`mailto:${publication.privacyEmail}`}>
      {publication.privacyEmail}
    </a>
  );
}

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
            How Maestral Technologies handles information when you visit its
            corporate website or get in touch.
          </p>
          <p className="privacy-date">
            Effective date:{" "}
            <PublicationField value={publication.effectiveDate} /> · Last
            updated: {publication.lastUpdated}
          </p>
          
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
                This notice applies to the Maestral Technologies corporate
                website at <PublicationField value={publication.website} />, its
                contact form, and related business correspondence. “Maestral”,
                “we”, “us”, and “our” mean the legal operator identified in
                section 2.
              </p>
              <p>
                The website presents Maestral’s work and products. It does not
                provide user accounts, a newsletter subscription, or a payment
                checkout. Sending a message does not create an account,
                subscribe you to marketing, or authorise a payment.
              </p>
              <p>
                Applications featured here, including the wedding platform,
                Uplinked, BrewOS, and the wearable platform, are separate
                services. Their account, customer-content, payment, and
                health-data processing is outside this notice and must be
                explained in the notice applicable to the relevant product.
                Stripe is not integrated into this corporate website’s contact
                flow.
              </p>
            </section>
            <section id="privacy-controller">
              <h2>2. Operator and data controller</h2>
              <p>
                The operator and data controller is{" "}
                <strong>{publication.operator}</strong>, a Hungarian sole
                proprietor trading as Maestral Technologies.
              </p>
              <dl className="privacy-details">
                <div>
                  <dt>Legal operator</dt>
                  <dd>{publication.operator}</dd>
                </div>
                
                <div>
                  <dt>Mailing / correspondence address</dt>
                  <dd>
                    <PublicationField value={publication.mailingAddress} />
                  </dd>
                </div>
                <div>
                  <dt>Business registration number</dt>
                  <dd>
                    <PublicationField value={publication.registrationNumber} />
                  </dd>
                </div>
                <div>
                  <dt>Registration authority</dt>
                  <dd>
                    <PublicationField
                      value={publication.registrationAuthority}
                    />
                  </dd>
                </div>
                <div>
                  <dt>Business tax number</dt>
                  <dd>
                    <PublicationField value={publication.taxNumber} />
                  </dd>
                </div>
                <div>
                  <dt>Privacy and business contact</dt>
                  <dd>
                    <PrivacyEmail />
                  </dd>
                </div>
              </dl>
              <p>
                Use the privacy email for questions and rights requests. You can
                also write to the correspondence address above. Please identify
                the website or message concerned, without including unnecessary
                confidential information.
              </p>
            </section>
            <section id="privacy-information">
              <h2>3. Information, purposes, and legal bases</h2>
              <h3>Visiting the website</h3>
              <p>
                Serving a page or image involves processing technical request
                information. Our hosting and security infrastructure can receive
                your IP address, request time, requested resource, browser and
                operating-system information, referring page where supplied,
                response status, and diagnostic or abuse-prevention information.
                These details originate from your browser and network
                connection.
              </p>
              <p>
                We use the infrastructure to deliver the website, maintain
                availability, investigate faults, and prevent abuse. Where the
                GDPR applies, the legal basis is Article 6(1)(f): our legitimate
                interests in operating a reliable website and protecting it and
                its visitors. We do not operate a separate visitor-profile
                database or use this information to build advertising profiles.
              </p>
              <h3>Contact-form submissions and correspondence</h3>
              <p>
                The contact form asks for your email address and message. Name
                is optional. Formspree receives those fields and technical
                information associated with the submission, processes them to
                handle delivery and spam prevention, and makes the submission
                available to us. It can also forward a notification to our
                designated mailbox. We do not receive your email account
                password.
              </p>
              <p>
                We use your message to respond, assess an inquiry, discuss a
                project, and maintain the resulting correspondence. If you write
                directly by email, we also receive normal email metadata and any
                information or attachments you choose to include. Your message
                may contain business details such as an organisation or role; we
                do not require them.
              </p>
              <p>
                The GDPR legal basis is Article 6(1)(b) where processing is
                necessary for steps you request before entering a contract with
                you. For other business inquiries, including communications with
                someone acting for an organisation, it is Article 6(1)(f): our
                legitimate interest in answering relevant communications and
                managing business relationships. We rely on Article 6(1)(c) when
                a specific legal obligation requires a record, and Article
                6(1)(f) where limited information is necessary to establish,
                exercise, or defend legal claims.
              </p>
              <p>
                Providing information is voluntary, but a valid email address
                and sufficient message details are needed to send the form and
                receive a response. Please do not send passwords, full card
                numbers, identity documents, health records, or other
                unnecessary sensitive information. The website does not collect
                payment-card details through its form.
              </p>
              <h3>What happens to unfinished messages</h3>
              <p>
                The website keeps entries in the active page while you complete
                the form. It does not save drafts to local storage or session
                storage. Entries are sent to Formspree when you submit the form;
                they are cleared after a successful submission. Your browser or
                password manager may independently offer autofill or save
                information under settings you control.
              </p>
            </section>
            <section id="privacy-cookies">
              <h2>4. Cookies, analytics, and advertising</h2>
              <p>
                The corporate website’s application code does not set cookies,
                use local or session storage, or include advertising pixels,
                social-media tracking widgets, or visitor-analytics scripts.
                Images are served with the website; product previews are static
                images rather than embedded applications.
              </p>
              <p>
                Hosting, delivery, and submission providers still process
                necessary technical information to deliver their services and
                protect them from abuse. Any strictly necessary security
                mechanism is used for that limited purpose. This is distinct
                from optional audience measurement or advertising tracking.
              </p>
              <p>
                We do not sell personal information, disclose it for
                cross-context behavioural advertising, use it for targeted
                advertising, or track visitors across unrelated websites for
                advertising. Service-provider processing described here supports
                website delivery, security, and communications, rather than an
                advertising exchange.
              </p>
              <p>
                Because those sale and advertising-sharing activities are not
                carried out, a Global Privacy Control signal has no such
                activity to switch off. The application does not implement a
                separate response to a browser’s Do Not Track setting; the
                no-advertising-tracking practices above apply regardless of that
                setting. These signals do not prevent necessary website delivery
                or a contact submission you request.
              </p>
              <p>
                If optional cookies, analytics, or advertising features are
                introduced, this notice and any required consent or preference
                controls must be updated before those features are activated.
              </p>
            </section>
            <section id="privacy-providers">
              <h2>5. Recipients and service providers</h2>
              <h3>Vercel — website hosting and delivery</h3>
              <p>
                <strong>Vercel Inc.</strong> provides the infrastructure used to
                host and deliver the website. It processes technical request and
                service information to operate and secure its infrastructure.
                Its published contact address is 440 N Barranca Avenue #4133,
                Covina, CA 91723, United States; its privacy contact is{" "}
                <a href="mailto:privacy@vercel.com">privacy@vercel.com</a>. See{" "}
                <a href="https://vercel.com/legal/privacy-notice" {...external}>
                  Vercel’s Privacy Notice
                </a>{" "}
                and{" "}
                <a href="https://vercel.com/legal/dpa" {...external}>
                  Data Processing Addendum
                </a>
                . The contractual terms applicable to a customer depend on its
                service agreement and plan.
              </p>
              <h3>Formspree — contact-form delivery and spam prevention</h3>
              <p>
                <strong>Formspree, Inc.</strong> handles contact submissions. It
                receives the submitted name, if supplied, email address,
                message, and associated technical information such as IP
                address, browser information, and submission timing. Submissions
                may be stored in its inbox and forwarded to our business email.
                Formspree states that its infrastructure is hosted in the United
                States. See{" "}
                <a
                  href="https://formspree.io/legal/privacy-policy/"
                  {...external}
                >
                  Formspree’s Privacy Policy
                </a>{" "}
                and{" "}
                <a href="https://formspree.io/security/" {...external}>
                  Security information
                </a>
                .
              </p>
              <h3>Email, administration, and lawful disclosures</h3>
              <p>
                Business email and communications providers receive
                correspondence and delivery metadata as necessary to receive,
                store, and transmit our messages. Professional advisers may
                receive limited records when necessary for an identified legal
                or administrative matter. We can provide further information
                about the providers relevant to a particular inquiry through the
                privacy contact.
              </p>
              <p>
                Where a provider processes information on our instructions, it
                acts as a processor. A provider may separately act as an
                independent controller for purposes it determines, such as its
                own legal obligations or infrastructure security; its notice
                explains those activities. Disclosures to authorities or courts
                are made where required by law or otherwise lawfully necessary.
                We limit disclosures to the purpose involved.
              </p>
              <p>
                We do not make contact-form submissions public or add senders to
                a marketing list merely because they contact us.
              </p>
            </section>
            <section id="privacy-transfers">
              <h2>6. International processing</h2>
              <p>
                The operator is established in Hungary. Vercel and Formspree are
                US-based providers, and their infrastructure or authorised
                service providers may process information in the United States
                and other countries. This website does not promise EU-only
                processing.
              </p>
              <p>
                For transfers subject to the GDPR, a valid Chapter V mechanism
                is required. Formspree publicly states that it relies on
                Standard Contractual Clauses as a processor. Vercel describes
                Standard Contractual Clauses in its applicable processing terms
                and participation in the EU–US Data Privacy Framework for
                covered processing. These mechanisms apply only within their
                relevant scope and where legally available; a link to a
                provider’s policy is not a substitute for the applicable
                contractual arrangements.
              </p>
              <p>
                You may contact us for information about the safeguards
                applicable to the processing of your information, including how
                to obtain a copy of relevant contractual safeguards, subject to
                necessary redactions to protect other persons or confidential
                information.
              </p>
            </section>
            <section id="privacy-retention">
              <h2>7. Retention and deletion</h2>
              <h3>Routine inquiries</h3>
              <p>
                We retain ordinary contact submissions and correspondence while
                handling the inquiry and for up to{" "}
                <strong>
                  12 months after the last substantive communication
                </strong>
                , to allow reasonable follow-up. This applies to copies under
                our control in the Formspree inbox and business mailbox. Copies
                may be removed sooner, including where a provider’s shorter
                storage period applies or a valid deletion request is fulfilled.
              </p>
              <h3>Spam and unsolicited material</h3>
              <p>
                Material identified as spam, an accidental submission, or
                unrelated unsolicited content is removed once assessed and no
                longer needed for abuse prevention, ordinarily within{" "}
                <strong>30 days</strong> of that assessment. A limited record of
                an ongoing abuse incident may be retained while necessary to
                investigate or protect the service.
              </p>
              <h3>Technical and security information</h3>
              <p>
                We do not create a separate database of visitor browsing
                histories. Hosting and security providers keep the technical
                records needed to operate and protect their infrastructure under
                their applicable service schedules and legal responsibilities.
                Their retention is determined by the service,
                incident-investigation needs, and applicable legal requirements;
                their notices linked above explain their own retention
                practices. Information preserved for a specific incident is kept
                only while necessary to investigate, resolve, or document that
                incident or related legal claims.
              </p>
              <h3>Records that need longer retention</h3>
              <p>
                If an inquiry becomes a contractual relationship, relevant
                contract or legally required business records are kept for the
                applicable statutory retention period. Evidence needed for a
                specific legal claim may be retained until the relevant
                limitation period expires or the matter is finally resolved. We
                retain only the records relevant to that obligation or claim,
                rather than all correspondence indefinitely.
              </p>
              <p>
                When the purpose and any lawful retention requirement end,
                records under our control are deleted or irreversibly
                anonymised. Residual provider backup copies can remain until
                overwritten under the provider’s applicable backup cycle; they
                are not a reason to resume ordinary use of data that should have
                been deleted. Requests concerning provider-held copies are
                coordinated with the relevant provider where required.
              </p>
            </section>
            <section id="privacy-security">
              <h2>8. Security and automated processing</h2>
              <p>
                The website and its Formspree endpoint use HTTPS for
                transmission. Access to correspondence is limited to persons who
                need it to handle the inquiry or a related lawful task. We
                minimise the information requested and do not operate a
                contact-form database on a separate Maestral application server.
              </p>
              <p>
                Our safeguards are proportionate to the information and risks
                involved. No online service can guarantee absolute security. If
                a personal data breach occurs, we assess it and notify the
                competent authority and affected individuals where required by
                applicable law.
              </p>
              <p>
                The website does not make solely automated decisions producing
                legal or similarly significant effects about visitors.
                Formspree’s automated spam and abuse checks can affect whether
                an inquiry is delivered. These checks do not determine
                eligibility for a service, employment, credit, or another
                similarly significant outcome. If you believe a genuine message
                was filtered, contact the privacy or business email directly.
              </p>
            </section>
            <section id="privacy-rights">
              <h2>9. EEA privacy rights</h2>
              <p>
                Where the GDPR applies, you may request access to your personal
                data and information about its processing; correction of
                inaccurate information; erasure; or restriction of processing.
                Portability applies where the relevant processing is automated
                and based on consent or a contract. These rights are subject to
                their statutory conditions and exceptions.
              </p>
              <p>
                You may object, on grounds relating to your particular
                situation, to processing based on legitimate interests. We then
                stop that processing unless we can demonstrate compelling
                overriding legitimate grounds or processing is needed for legal
                claims. If an activity relies on consent, you may withdraw that
                consent without affecting earlier lawful processing. Ordinary
                inquiry handling is based on the grounds identified in section
                3, not blanket consent inferred from visiting the website.
              </p>
              <p>
                Send requests to <PrivacyEmail /> or the mailing address in
                section 2. Include enough detail to locate the information, such
                as the address used for your inquiry. We may request
                proportionate verification where needed, but not excessive
                identification. There is no account to log into or delete on
                this corporate website.
              </p>
              <p>
                We respond without undue delay and normally within{" "}
                <strong>one month</strong>. If a lawful extension is necessary
                because of complexity or the number of requests, we may extend
                by up to two further months and will explain this within the
                first month. Requests are ordinarily free; any permitted fee or
                refusal for a manifestly unfounded or excessive request will be
                explained. We also explain any lawful limitation on the response
                and the available complaint and judicial remedies.
              </p>
              <p>
                You may complain to the{" "}
                <strong>
                  Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)
                </strong>
                , Hungary’s supervisory authority: 1055 Budapest, Falk Miksa
                utca 9–11, Hungary; postal address: 1363 Budapest, Pf. 9. See{" "}
                <a
                  href="https://www.naih.hu/ugyfelszolgalat-kapcsolat"
                  {...external}
                >
                  NAIH’s contact and submission procedures{" "}
                  <ArrowUpRight size={12} aria-hidden="true" />
                </a>
                . Ordinary email to the authority is not necessarily a valid way
                to initiate formal proceedings; follow its published procedures.
                You may also complain to a competent authority in the EEA
                country where you habitually reside, work, or consider an
                infringement to have occurred, and seek a judicial remedy.
              </p>
            </section>
            <section id="privacy-us">
              <h2>10. United States residents</h2>
              <p>
                US privacy rights depend on your state of residence, the
                information involved, and whether the relevant law applies to
                the operator. This section does not represent that Maestral
                meets the coverage thresholds of every US privacy statute.
              </p>
              <h3>Categories, sources, and disclosures</h3>
              <p>
                Our website-related categories are contact identifiers (name,
                email address, and technical identifiers such as IP address),
                internet or network activity (request and diagnostic
                information), correspondence contents, and any professional
                details you voluntarily include. Sources are your browser and
                network connection, your direct submissions, and the hosting or
                communication services handling them. We use these categories
                for the purposes in section 3 and disclose them only to the
                recipient categories in section 5 or as lawfully required. The
                retention criteria in section 7 apply to each relevant category.
              </p>
              <p>
                We do not request precise location, government identifiers,
                payment credentials, biometric identifiers, or health
                information through this website. Please avoid including
                sensitive information in free-text messages. We do not use
                sensitive information to infer visitor characteristics or
                operate advertising profiles.
              </p>
              <h3>Sale, advertising, and preference signals</h3>
              <p>
                We do not sell personal information or share it for
                cross-context behavioural advertising, and we do not use it for
                targeted advertising or profiling that produces legal or
                similarly significant effects. We do not knowingly sell or share
                minors’ information. Section 4 explains Global Privacy Control
                and Do Not Track handling. There is no sale or
                advertising-sharing programme from which visitors need to opt
                out.
              </p>
              <h3>Requests, authorised agents, and appeals</h3>
              <p>
                Where applicable, you may request confirmation or access,
                correction, deletion, or a portable copy, and exercise any
                applicable opt-out or sensitive-data rights. Send a request to{" "}
                <PrivacyEmail /> or the mailing address above. An authorised
                agent may submit a request with evidence of authority; we may
                also verify the individual’s identity where permitted.
                Verification is limited to what is reasonably necessary.
              </p>
              <p>
                We respond within the period required by the applicable state
                law, including any shorter applicable deadline, and explain any
                lawful extension or denial. To appeal a refusal where an appeal
                right applies, reply to our decision or email the privacy
                contact with “Privacy request appeal” in the subject. We review
                the decision and provide a reasoned response within the
                applicable deadline, together with information about any further
                complaint to the relevant state authority. We do not unlawfully
                discriminate against individuals for exercising their privacy
                rights.
              </p>
            </section>
            <section id="privacy-children">
              <h2>11. Children’s privacy</h2>
              <p>
                This corporate website is intended for a general business
                audience and is not directed to children under 13. We do not
                knowingly solicit contact information from children under 13. If
                you believe a child has provided personal information through
                the contact channels, notify us so that we can assess and delete
                it or take other steps required by law. Age-related rules for
                separate Maestral applications must be addressed in their own
                notices.
              </p>
            </section>
            <section id="privacy-links">
              <h2>12. External links and product previews</h2>
              <p>
                External websites and separately operated product services have
                their own privacy practices. Review the notice applicable to the
                destination. Linking to a provider’s notice does not remove our
                responsibility for our own processing and disclosures.
              </p>
              <p>
                Product screenshots on this site are presentation material.
                Viewing them does not create an account, connect your device to
                the product, or import your application or health data. People
                or information depicted in a preview are not information
                collected from the visitor merely viewing that image.
              </p>
            </section>
            <section id="privacy-updates">
              <h2>13. Changes and contact</h2>
              <p>
                We update this notice when our website practices or applicable
                requirements change and display the effective and last-updated
                dates above. Material changes are communicated where required. A
                revised notice does not itself provide consent to a new activity
                or override your rights.
              </p>
              <p>
                For questions, requests, or concerns, contact <PrivacyEmail />{" "}
                or write to{" "}
                <PublicationField value={publication.mailingAddress} />. The
                legal operator remains {publication.operator}, trading as
                Maestral Technologies.
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
