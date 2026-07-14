/**
 * Attributes for a link. External (http) links open in a new tab; in-page and
 * mailto: links should not, so they get no target/rel.
 */
export function externalLinkProps(
  href: string
): { target?: "_blank"; rel?: "noreferrer" } {
  return href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {};
}
