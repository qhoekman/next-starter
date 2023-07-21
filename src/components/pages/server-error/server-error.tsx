import { ErrorLayout } from '@/components/layouts/error/error';

export const metadata = {
  title: 'Server Error',
  description: 'Server Error',
};

export const ServerErrorPage: React.FC = () => {
  return <ErrorLayout data-testid="server-error-page" status={500} />;
};
