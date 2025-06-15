import { render } from '@testing-library/react';
import ResourcesPage, { metadata } from '@/app/resources/page';

// Mock the ResourcesComponent
jest.mock('@/app/resources/resources-component', () => {
  return function MockResourcesComponent() {
    return <div data-testid="resources-component">Resources Component</div>;
  };
});

describe('ResourcesPage', () => {
  it('renders ResourcesComponent', () => {
    const { getByTestId } = render(<ResourcesPage />);
    expect(getByTestId('resources-component')).toBeInTheDocument();
  });

  it('has correct metadata', () => {
    expect(metadata.title).toBe('Resources - Chaos Cabinet');
    expect(metadata.alternates.canonical).toBe('/resources');
  });
});