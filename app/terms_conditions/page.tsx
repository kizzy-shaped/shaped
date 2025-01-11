import Container from "@/components/container";
import { Heading, Subheading, Text, BoldText } from "@/components/policyTypography";
import { ReactNode } from "react";

function TermsConditions() {
  return (
    <div className="w-full h-fit bg-black">
      <Container className="flex flex-col wmin_md:gap-[30px] wmax_md:gap-[20px] wmin_md:pt-[30px] wmax_md:pt-[20px]">
        <Heading>Terms and Conditoions</Heading>

        <div className="w-full h-fit flex flex-col wmin_md:gap-[20px] wmax_md:gap-[15px]">

            <Text>Please read these terms and conditions carefully before using Our Service.</Text>
            <Text>Interpretation and Definitions</Text>

            <Subheading>INTERPRETATION</Subheading>

            <Text>The words of which the initial letter is capitalized have meanings defined under the following conditions.</Text>
            <Text>The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</Text>

            <Subheading>DEFINITION</Subheading>

            <Text>For the purposes of these Terms and Conditions:</Text>

            <ul className="w-full h-fit flex flex-col wmin_md:gap-[20px] wmax_md:gap-[15px]" style={{listStyleType: ''}}>
                <li>
                    <Text><BoldText>Affiliate</BoldText> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</Text>
                </li>
                <li>
                    <Text><BoldText>Company</BoldText> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Shaped.</Text>
                </li>
                <li>
                    <Text><BoldText>Country </BoldText> refers to United Kingdom unless otherwise stated. </Text>
                </li>
                <li>
                    <Text><BoldText>Services</BoldText> refers to any intangible business offerings delineated on the Website.</Text>
                </li>
                <li>
                    <Text><BoldText>Products</BoldText> refers to any tangible items procured on behalf of the Client.</Text>
                </li>
                <li>
                    <Text><BoldText>Request</BoldText> means any request placed by a client to Shaped that are not otherwise stated under Services and Products.</Text>
                </li>
                <li>
                    <Text><BoldText>Terms & Conditions</BoldText> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the fCompany regarding the use of the Service. This Terms and Conditions agreement as been created with the help of Terms and Conditions Generator.</Text>
                </li>
                <li>
                    <Text><BoldText>Website</BoldText> refers to Shaped, accessible from http://shaped.com</Text>
                </li>
                <li>
                    <Text><BoldText>You</BoldText> (“the Client”) means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</Text>
                </li>
                <li>
                    <Text><BoldText>Payment</BoldText> refers to the methods employed to submit monies rendered for the Services and/or Products provided to you (“the client”).</Text>
                </li>
                <li>
                    <Text><BoldText>Specialist</BoldText> refers to a Specialist engaged by Shaped on behalf of and as an agent for a client to provide Services and/or Products to that client.</Text>
                </li>
            </ul>

            <Subheading>ACKNOWLEDGEMENT</Subheading>

            <Text>
            These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
            </Text>

            <Text>
            Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
            </Text>

            <Text>
            By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
            </Text>

            <Text>
            Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
            </Text>
        </div>
      </Container>
    </div>
  );
}

export default TermsConditions;

