import { render } from '@testing-library/react';
import WritingPage, { metadata } from '@/app/writings/page';

// Mock the WritingComponent
jest.mock('@/app/writings/writing-component', () => {
  return function MockWritingComponent() {
    return <div data-testid="writing-component">Writing Component</div>;
  };
});

describe('WritingPage', () => {
  it('renders WritingComponent', () => {
    const { getByTestId } = render(<WritingPage />);
    expect(getByTestId('writing-component')).toBeInTheDocument();
  });

  it('has correct metadata', () => {
    expect(metadata.title).toBe('Writings - Technical Blog');
    expect(metadata.alternates.canonical).toBe('/writings');
  });
});