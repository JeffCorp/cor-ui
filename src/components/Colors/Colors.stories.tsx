import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Colors from './Colors';

const meta: Meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj;

const ColorSwatch = ({ color, name }: { color: string; name: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
    <div
      style={{
        width: '100px',
        height: '40px',
        backgroundColor: color,
        borderRadius: '4px',
        marginRight: '16px',
        border: '1px solid #E1E2E5',
      }}
    />
    <div>
      <div style={{ fontWeight: 'bold' }}>{name}</div>
      <div style={{ fontSize: '14px', color: '#888991' }}>{color}</div>
    </div>
  </div>
);

const ColorSection = ({ title, colors }: { title: string; colors: Record<string, string> }) => (
  <div style={{ marginBottom: '32px' }}>
    <h3>{title}</h3>
    {Object.entries(colors).map(([name, color]) => (
      <ColorSwatch key={name} color={color} name={name} />
    ))}
  </div>
);

export const Palette: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <h2>Primary Colors</h2>
      <ColorSection title="Base" colors={Colors.primary.base} />
      <ColorSection title="Gray" colors={Colors.primary.gray} />
      <ColorSection title="Brand" colors={Colors.primary.brand} />
      <ColorSection title="Error" colors={Colors.primary.error} />
      <ColorSection title="Warning" colors={Colors.primary.warning} />
      <ColorSection title="Success" colors={Colors.primary.success} />

      <h2>Secondary Colors</h2>
      <ColorSection title="Olive" colors={Colors.secondary.olive} />
      <ColorSection title="Orange" colors={Colors.secondary.orange} />
      <ColorSection title="Blue" colors={Colors.secondary.blue} />
      <ColorSection title="Violet" colors={Colors.secondary.violet} />
    </div>
  ),
}; 