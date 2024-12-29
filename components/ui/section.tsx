interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
  }
  
  export function Section({ children, className, ...props }: SectionProps) {
    return (
      <section className={`py-24 ${className}`} {...props}>
        {children}
      </section>
    )
  }
  
  