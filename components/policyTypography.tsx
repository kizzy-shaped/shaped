import { ReactNode } from "react";

export const Heading = ({
    children,
    className = "",
  }: {
    children: ReactNode;
    className?: string;
  }) => <div className={`wmin_md:text-[22px] wmax_md:text-[20px] font-medium text-white ${className}`}>{children}</div>;
  
  export const Subheading = ({
    children,
    className = "",
  }: {
    children: ReactNode;
    className?: string;
  }) => <div className={`wmin_md:text-[20px] wmax_md:text-[18px] font-medium text-white uppercase ${className}`}>{children}</div>;
  
  export const Text = ({
    children,
    className = "",
  }: {
    children: ReactNode;
    className?: string;
  }) => <div className={`wmin_md:text-[16px] wmax_md:text-[14px] font-regular text-white ${className}`}>{children}</div>;
  
  export const BoldText = ({
    children,
    className = "",
  }: {
    children: ReactNode;
    className?: string;
  }) => <div className={`wmin_md:text-[16px] wmax_md:text-[14px] font-medium text-white inline-block ${className}`}>{children}</div>;
  
