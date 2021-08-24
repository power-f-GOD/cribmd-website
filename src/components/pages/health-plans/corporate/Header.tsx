import { PageHeader } from 'src/components/shared';

const Header = (): JSX.Element => {
  return (
    <PageHeader
      headerText="Are you a business? <br />We have the right health plans for you!"
      ctaText="Subscribe Now"
      ctaHref="https://app.cribmd.com/signup?rURL=corp/slot"
      rider="Our Individual health plan offers various healthcare coverage options to suit
        different budgets. You can choose between our basic, premium or family
        plans all focused on delivering a remarkable healthcare experience."
    />
  );
};

export default Header;
