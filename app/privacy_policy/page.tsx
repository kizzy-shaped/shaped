import Container from "@/components/container";
import {
  Heading,
  Subheading,
  Text,
  BoldText,
} from "@/components/policyTypography";
import { ReactNode } from "react";
import Link from 'next/link'

function PrivacyPolicy() {
  return (
    <div className="w-full h-fit bg-black">
      <Container className="flex flex-col wmin_md:gap-[30px] wmax_md:gap-[20px] wmin_md:pt-[30px] wmax_md:pt-[20px]">
        <Heading>Privacy Policy</Heading>

        <Text>Last updated 02/01/2025</Text>

        <div className="w-full h-fit flex flex-col wmin_md:gap-[20px] wmax_md:gap-[15px]">
          <Text>
            Thank you for choosing to be part of our community at Shaped.
            (“Company”, “we”, “us”, or “our”). We are committed to protecting
            your personal information and your right to privacy. If you have any
            questions or concerns about our policy, or our practices with
            regards to your personal information, please contact us at
            <Link href='mailto:info@shapedservices.com.' target='_blank'>info@shapedservices.com.</Link>
          </Text>

          <Text>
            By visiting our website <Link href='www.shapedservices.com' target='_blank'>www.shapedservices.com </Link> and using our services, 
            you trust us with your personal information. We take your privacy very 
            seriously. This privacy policy explains what information we collect, 
            how we use it, and what rights you have in relation to it. If you do 
            not agree with any part of this policy, please discontinue use of our 
            website and services.
          </Text>
          <Text>
           This policy applies to all personal information collected through our 
            website, services, sales, marketing, and events (collectively, the "Services").
          </Text>

          <Subheading>WHAT INFORMATION DO WE COLLECT?</Subheading>

          <Text>Personal information you disclose to us</Text>

          <Text>
           We collect personal information that you provide voluntarily 
            when you express an interest in our services, participate 
            in activities on our website, or contact us directly. The 
            type of information we collect depends on your interactions 
            with us and may include:
          </Text>

           <ul
            className="w-full h-fit flex flex-col wmin_md:gap-[20px] wmax_md:gap-[15px]"
            style={{ listStyleType: 'disc' }}
          >
            <li>
              <Text><BoldText>Identity Information</BoldText> – First name, last name, maiden name, or nickname.</Text>
              </li>
            <li>
              <Text><BoldText>Contact Information</BoldText> – Phone number, email address, and postal address.</Text>
              </li>
            <li>
              <Text><BoldText>Financial Information</BoldText> – Payment details such as credit card number, billing address, and transaction history.</Text>
              </li>
            <li>
              <Text><BoldText>Security Information</BoldText> – Passwords, security questions, and authentication credentials.</Text>
              </li>
           </ul>

          <Text>
            The personal information that we collect depends on the context of
            your interactions with us and the Services, the choices you make and
            the products and features you use. The personal information we
            collect can include the following:
          </Text>

          <BoldText>
           Automatically Collected Information
          </BoldText>

          <Text>
            We automatically collect certain information when you visit our website, including:
          </Text>

          <ul
            className="w-full h-fit flex flex-col wmin_md:gap-[20px] wmax_md:gap-[15px]"
            style={{ listStyleType: 'disc' }}
          >
            <li>
              <Text><BoldText>Technical Data</BoldText> – IP address, browser type, and operating system.</Text>
              </li>
            <li>
              <Text><BoldText>Usage Data</BoldText> – Pages visited, time spent on pages, and interactions with the website.</Text>
              </li>
            <li>
              <Text><BoldText>Cookies and Tracking Technologies</BoldText> – See our <BoldText>Cookie Policy</BoldText> for details.</Text>
              </li>
           </ul>

          <Subheading>2. HOW DO WE USE YOUR INFORMATION?</Subheading>

          <Text>We process personal information based on legitimate business interests, contract fulfilment, legal obligations, and/or your consent. Specifically, we use your information to:</Text>

          <ul
            className="w-full h-fit flex flex-col wmin_md:gap-[20px] wmax_md:gap-[15px]"
            style={{ listStyleType: 'disc' }}
          >
            <li>
              <Text>
               Provide and manage our services.
              </Text>
            </li>
            <li>
              <Text>
               Process payments and manage transactions.
              </Text>
            </li>
            <li>
              <Text>
                Improve our website, services, and marketing strategies.
              </Text>
            </li>
            <li>
              <Text>
                Communicate with you, including sending updates, promotions, and customer support responses.
              </Text>
            </li>
            <li>
              <Text>
                Comply with legal obligations and respond to law enforcement requests.
              </Text>
            </li>
            <li>
              <Text>
               Protect against fraud, security threats, or other unlawful activities.
              </Text>
            </li>
          </ul>

          <Subheading>3. WILL YOUR INFORMATION BE SHARED?</Subheading>

          <Text>We only share your information under the following circumstances:</Text>

           <ul
            className="w-full h-fit flex flex-col wmin_md:gap-[20px] wmax_md:gap-[15px]"
            style={{ listStyleType: 'disc' }}
          >
            <li>
              <Text><BoldText>With Your Consent</BoldText> – When you explicitly agree to share your data.</Text>
              </li>
            <li>
              <Text><BoldText>Legal Compliance</BoldText> – If required by law or regulatory authorities.</Text>
              </li>
            <li>
              <Text><BoldText>Business Transfers</BoldText> In case of a merger, sale, or acquisition.</Text>
              </li>
            <li>
              <Text><BoldText>Service Providers</BoldText> – With third-party partners who assist in providing our services (e.g., payment processors like Stripe, whose privacy policy is available at Stripe Privacy Policy).</Text>
              </li>
            <li>
              <Text><BoldText>Security & Fraud Prevention</BoldText> – To protect against fraud, security breaches, or other threats.</Text>
              </li>
           </ul>

          <Text>We do not sell, rent, or trade personal data with third parties for marketing purposes.</Text>

          <Text>
            These are the Terms and Conditions governing the use of this Service
            and the agreement that operates between You and the Company. These
            Terms and Conditions set out the rights and obligations of all users
            regarding the use of the Service.
          </Text>

          <Subheading>
            4. HOW LONG DO WE KEEP YOUR INFORMATION?
          </Subheading>

          <Text>
           We retain personal information for as long as necessary to fulfil the 
            purposes outlined in this policy unless a longer retention period is 
            required by law. Typically, we store data for up to <BoldText>one (1) year</BoldText> 
            unless otherwise required.
          </Text>

          <Text>
           Once the retention period expires, we securely delete or anonymise your data.
          </Text>

          <Subheading>5. DO WE COLLECT INFORMATION FROM MINORS?</Subheading>

          <Text>
           Our services are not directed at children under 18 years of age, and we do not knowingly 
            collect data from minors. If we become aware that personal data from a minor has been 
            collected, we will take appropriate action to delete such information. If you believe 
            we may have collected data from a minor, please contact us at <Link href='mailto:info@shapedservices.com' target='_blank'>info@shapedservices.com</Link>.
          </Text>

          <Subheading>
           6. WHAT ARE YOUR PRIVACY RIGHTS?
          </Subheading>

          <Text>
          Under UK data protection laws (including the UK GDPR and the Data Protection Act 2018), you have the following rights:  
          </Text>

           <ul
            className="w-full h-fit flex flex-col wmin_md:gap-[20px] wmax_md:gap-[15px]"
            style={{ listStyleType: 'disc' }}
          >
            <li>
              <Text><BoldText>Right to Access</BoldText> – Request a copy of the personal data we hold about you.</Text>
              </li>
            <li>
              <Text><BoldText>Right to Rectification</BoldText> – Request corrections to any inaccurate or incomplete data.</Text>
              </li>
            <li>
              <Text><BoldText>Right to Erasure</BoldText> - Request the deletion of your personal data.</Text>
              </li>
            <li>
              <Text><BoldText>Right to Restrict Processing</BoldText> – Limit how we process your data under certain circumstances.</Text>
              </li>
            <li>
              <Text><BoldText>Right to Data Portability </BoldText> –Request transfer of your data to another service provider.</Text>
              </li>
            <li>
              <Text><BoldText>Right to Object </BoldText> – Object to processing based on legitimate interests.</Text>
              </li>
           </ul>

          <Text>
           To exercise any of these rights, contact us at <Link href='mailto:info@shapedservices.com' target='_blank'>info@shapedservices.com</Link>. We aim to respond within <BoldText>one (1) month</BoldText>.
          </Text>

          <Text>
           If you are not satisfied with our response, you can contact the UK Information Commissioner’s Office (ICO) at <Link href='www.ico.org.uk' target="_blank">www.ico.org.uk</Link>.
          </Text>

          <Subheading>
            7. DO WE USE COOKIES AND TRACKING TECHNOLOGIES?
          </Subheading>

          <Text>
           Yes, we use cookies and similar tracking technologies to improve user experience, 
            analyse website traffic, and enhance our marketing. You can manage your cookie preferences 
            in your browser settings. For more details, see our Cookie Policy.
          </Text>
          
          <Subheading>
            8. HOW DO WE KEEP YOUR INFORMATION SAFE?
          </Subheading>
          <Text>
           We implement appropriate technical and organisational security measures to protect your data 
            from unauthorised access, alteration, disclosure, or destruction. However, no online service 
            is 100% secure, so we encourage you to take necessary precautions when sharing personal data online.
          </Text>
          
          <Subheading>
            9. UPDATES TO THIS POLICY
          </Subheading>
          <Text>
           We may update this privacy policy from time to time in response to legal, technical, or business developments. 
            The latest version will always be available at <Link href='www.shapedservices.com' target='_blank'>www.shapedservices.com</Link>. If material changes occur, we will notify 
            you through email or a website notice.
          </Text>

          <Subheading>
            10. CONTACT US
          </Subheading>

          <BoldText>
            SHAPED Services
          </BoldText>
          <Text>
            <BoldText>Email:</BoldText> <Link href='mailto:info@shapedservices.com' target="_blank">info@shapedservices.com</Link>
          </Text>
          <Text>
            <BoldText>Website:</BoldText> <Link href='www.shapedservices.com' target="_blank">www.shapedservices.com</Link>
          </Text>
        </div>
      </Container>
    </div>
  );
}

export default PrivacyPolicy;
