export function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(203, 213, 225) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(203, 213, 225) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Gradient Overlay - Top Right */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(0, 188, 212, 0.3) 0%, transparent 70%)',
        }}
      />
      
      {/* Gradient Overlay - Bottom Left */}
      <div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(205, 220, 57, 0.3) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
