import { ErrorLayout } from '@/components/layouts/error/error';

export const metadata = {
  title: 'Not Found',
  description: 'Not Found',
};

export const NotFoundPage: React.FC = () => {
  return <ErrorLayout data-testid="not-found-page" status={404} />;
};
