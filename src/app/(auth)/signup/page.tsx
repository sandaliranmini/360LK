import AuthLogo from '@/components/auth/auth-logo';
import AuthTabs from '@/components/auth/auth-tabs';
import SignupForm from '@/components/auth/signup-form';

export const metadata = {
  title: 'Sign Up | 360LK',
  description: 'Create a 360LK account and start exploring Sri Lanka in virtual reality.',
};

export default function SignupPage() {
  return (
    <div className="bg-[#EDE4D3] rounded-3xl p-8 shadow-lg">
      <AuthLogo />
      <AuthTabs />
      <SignupForm />
    </div>
  );
}