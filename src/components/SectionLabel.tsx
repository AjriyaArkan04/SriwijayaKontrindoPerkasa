import { cx } from "@/lib/utils";

type SectionLabelProps = {
  index: string;
  title: string;
  dark?: boolean;
  className?: string;
};

/**
 * Recurring "drawing index" label — SEC.0X — TITLE — echoing architectural
 * drawing sheet numbering. This is the site's structural signature device.
 */
export function SectionLabel({ index, title, dark = false, className }: SectionLabelProps) {
  return (
    <div className={cx("flex items-center gap-3", className)}>
      <span
        className={cx(
          "font-mono text-xs tracking-[0.2em]",
          dark ? "text-brick" : "text-brick"
        )}
      >
        SEC.{index}
      </span>
      <span className={cx("h-px w-8", dark ? "bg-white/25" : "bg-line-dark/30")} />
      <span
        className={cx(
          "font-mono text-xs tracking-[0.2em] uppercase",
          dark ? "text-white/60" : "text-steel"
        )}
      >
        {title}
      </span>
    </div>
  );
}
