import PageContainer from "@/components/common/PageContainer";
import ContactDetailsContact from "@/components/contact/ContactDetails";
import LeftContentsContact from "@/components/contact/LeftContentsContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Toji Communication Consultancy",
  description:
    "There's little that communication cannot solve. If you have a problem, we have a solution. Try us.",
};
const Contact = () => {
  return (
    <PageContainer
      LeftContents={<LeftContentsContact />}
      RightcontentItems={<ContactDetailsContact />}
    />
  );
};

export default Contact;
