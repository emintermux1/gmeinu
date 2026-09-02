"use client";

import { useCallback, useState } from "react";

type CopyAddressProps = {
  address: string;
  className?: string;
  label?: string;
  labelClassName?: string;
  value: string;
  valueClassName?: string;
  hint?: string;
  hintClassName?: string;
};

export function CopyAddress({
  address,
  className,
  label,
  labelClassName,
  value,
  valueClassName,
  hint,
  hintClassName,
}: CopyAddressProps) {
  const [copied, setCopied] = useState(false);

  const onClick = useCallback(() => {
    void navigator.clipboard.writeText(address).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    }).catch(() => {});
  }, [address]);

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      title="Copy contract address"
      aria-label={`Copy contract address ${address}`}
    >
      {label ? <span className={labelClassName}>{label}</span> : null}
      <span className={valueClassName}>{copied && !hint ? "Copied" : value}</span>
      {hint ? (
        <span className={hintClassName}>{copied ? "Copied" : hint}</span>
      ) : null}
    </button>
  );
}
