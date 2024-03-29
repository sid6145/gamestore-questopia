import "./formwrap.css"

interface FormWrapProps {
    children: React.ReactNode;
    className?: string;
}

const FormWrap = (props: FormWrapProps) => {
    const { children, className = "" } = props
  return <div className={`formwrap-root ${className}`}>{children}</div>;
}

export default FormWrap