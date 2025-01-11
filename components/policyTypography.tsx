import { ReactNode } from "react";

export const Heading = ({
    children,
    className = "",
  }: {
    children: ReactNode;
    className?: string;
  }) => <div className={`wmin_md:text-[32px] wmax_md:text-[28px] font-black text-white ${className}`}>{children}</div>;
  
  export const Subheading = ({
    children,
    className = "",
  }: {
    children: ReactNode;
    className?: string;
  }) => <div className={`wmin_md:text-[28px] wmax_md:text-[24px] font-bold text-white uppercase ${className}`}>{children}</div>;
  
  export const Text = ({
    children,
    className = "",
  }: {
    children: ReactNode;
    className?: string;
  }) => <div className={`wmin_md:text-[20px] wmax_md:text-[18px] font-semibold text-white ${className}`}>{children}</div>;
  
  export const BoldText = ({
    children,
    className = "",
  }: {
    children: ReactNode;
    className?: string;
  }) => <div className={`wmin_md:text-[20px] wmax_md:text-[18px] font-black text-white inline-block ${className}`}>{children}</div>;
  