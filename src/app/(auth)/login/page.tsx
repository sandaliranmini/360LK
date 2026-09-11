import AuthLogo from '@/components/auth/auth-logo';
import AuthTabs from '@/components/auth/auth-tabs';
import LoginForm from '@/components/auth/login-form';

export const metadata = {
  title: 'Log In | 360LK',
  description: 'Log in to your 360LK account to access immersive VR tours of Sri Lanka.',
};

export default function LoginPage() {
  return (
    <div className="bg-[#EDE4D3] rounded-3xl p-8 shadow-lg">
      <AuthLogo />
      <AuthTabs />
      <LoginForm />
    </div>
  );
}