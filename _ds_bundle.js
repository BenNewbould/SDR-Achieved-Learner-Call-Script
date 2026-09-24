/* @ds-bundle: {"format":4,"namespace":"VelocityAcademyDesignSystem_eca7fd","components":[{"name":"CtaBanner","sourcePath":"components/brand/CtaBanner.jsx"},{"name":"GlassChip","sourcePath":"components/brand/GlassChip.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"ScriptTagline","sourcePath":"components/brand/ScriptTagline.jsx"},{"name":"TaglineStrip","sourcePath":"components/brand/TaglineStrip.jsx"},{"name":"ChecklistItem","sourcePath":"components/content/ChecklistItem.jsx"},{"name":"CourseCard","sourcePath":"components/content/CourseCard.jsx"},{"name":"FeatureItem","sourcePath":"components/content/FeatureItem.jsx"},{"name":"LogoWall","sourcePath":"components/content/LogoWall.jsx"},{"name":"NewsCard","sourcePath":"components/content/NewsCard.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"StepItem","sourcePath":"components/content/StepItem.jsx"},{"name":"SuccessStoryCard","sourcePath":"components/content/SuccessStoryCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/content/TestimonialCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconTile","sourcePath":"components/core/IconTile.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"PageHero","sourcePath":"components/layout/PageHero.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"SplitFeature","sourcePath":"components/layout/SplitFeature.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/brand/CtaBanner.jsx":"b526b7e996c2","components/brand/GlassChip.jsx":"054f468c3186","components/brand/Logo.jsx":"c24461ccd295","components/brand/ScriptTagline.jsx":"f38f4a4de366","components/brand/TaglineStrip.jsx":"843d3683bf8d","components/content/ChecklistItem.jsx":"ef27f5f43ac6","components/content/CourseCard.jsx":"112e99e1cb01","components/content/FeatureItem.jsx":"b863fc7ed479","components/content/LogoWall.jsx":"9af47a8a88ce","components/content/NewsCard.jsx":"07e63819cb8c","components/content/StatBlock.jsx":"561030fba944","components/content/StepItem.jsx":"cd2fb06b39b4","components/content/SuccessStoryCard.jsx":"61ee1251e047","components/content/TestimonialCard.jsx":"ae3ea9d74be9","components/core/Button.jsx":"67913cb1f1cc","components/core/Card.jsx":"c694792077b8","components/core/IconTile.jsx":"d6cc8ebfd1e3","components/core/SectionHeading.jsx":"5fa4b832966b","components/core/Tag.jsx":"d1fe34f8904f","components/forms/Checkbox.jsx":"5b5e1803d308","components/forms/Input.jsx":"03a6f9749d08","components/forms/Select.jsx":"159f748652d3","components/layout/PageHero.jsx":"13754b31ca82","components/layout/Section.jsx":"2602bf621135","components/layout/SplitFeature.jsx":"5bfeb35294b4","components/navigation/SiteFooter.jsx":"c0d19c223ede","components/navigation/SiteHeader.jsx":"1eb9bc8fec34","ui_kits/website/CourseScreen.jsx":"7863e7d6c644","ui_kits/website/EmployersScreen.jsx":"50650406a84b","ui_kits/website/HomeScreen.jsx":"691e75e40313","ui_kits/website/StoryScreen.jsx":"770e899ac6a0","ui_kits/website/data.jsx":"edd284d2f276"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VelocityAcademyDesignSystem_eca7fd = window.VelocityAcademyDesignSystem_eca7fd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/GlassChip.jsx
try { (() => {
function GlassChip({
  icon,
  iconSrc,
  title,
  subtitle,
  align = 'row',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: align === 'row' ? 'row' : 'column',
      alignItems: align === 'row' ? 'center' : 'flex-start',
      gap: align === 'row' ? 12 : 8,
      background: 'var(--glass-bg)',
      backdropFilter: 'var(--glass-blur)',
      border: 'var(--glass-border)',
      boxShadow: 'var(--glass-shadow)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      ...style
    }
  }, iconSrc ? /*#__PURE__*/React.createElement("img", {
    src: iconSrc,
    alt: "",
    style: {
      width: 30,
      height: 30
    }
  }) : icon ? /*#__PURE__*/React.createElement("span", {
    className: "vel-icon",
    style: {
      fontSize: 26,
      color: 'var(--blue-600)'
    }
  }, icon) : null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-body-sm)',
      fontWeight: 'var(--w-semibold)',
      color: 'var(--text-strong)'
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, subtitle) : null));
}
Object.assign(__ds_scope, { GlassChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GlassChip.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Logo asset paths are resolved relative to the design-system root. */
const SRC = {
  full: 'assets/logo-velocity-academy.png',
  white: 'assets/logo-velocity-academy-white.png',
  compact: 'assets/logo-lockup-compact.png'
};
function Logo({
  variant = 'full',
  height = 56,
  base = '',
  style,
  ...rest
}) {
  const prefix = base ? base.replace(/\/$/, '') + '/' : '';
  return /*#__PURE__*/React.createElement("img", _extends({
    src: prefix + SRC[variant],
    alt: "Velocity Academy",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/ScriptTagline.jsx
try { (() => {
function ScriptTagline({
  lines,
  onDark = false,
  size = 34,
  underline = true,
  align = 'right',
  style
}) {
  const items = Array.isArray(lines) ? lines : String(lines).split('\n');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'right' ? 'flex-end' : 'flex-start',
      gap: 2,
      ...style
    }
  }, items.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      font: 'var(--type-script)',
      fontSize: size,
      lineHeight: 1.02,
      color: onDark ? 'var(--white)' : 'var(--text-accent)',
      transform: `rotate(-${3 - i * 0.6}deg)`
    }
  }, l)), underline ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 4,
      width: size * 2.4,
      height: Math.max(2, size * 0.07),
      borderRadius: 999,
      background: onDark ? 'var(--white)' : 'var(--blue-600)',
      transform: 'rotate(-2deg)'
    }
  }) : null);
}
Object.assign(__ds_scope, { ScriptTagline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ScriptTagline.jsx", error: String((e && e.message) || e) }); }

// components/brand/TaglineStrip.jsx
try { (() => {
function TaglineStrip({
  items,
  onDark = false,
  accentLast = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 0,
      flexWrap: 'wrap',
      boxSizing: 'border-box',
      background: onDark ? 'var(--white)' : 'var(--surface-panel)',
      borderRadius: 'var(--radius-lg)',
      padding: '18px 8px',
      ...style
    }
  }, items.map((raw, i) => {
    const lines = String(raw).split('\n');
    const isLast = i === items.length - 1;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: '1 1 0',
        minWidth: 0,
        padding: '0 18px',
        boxSizing: 'border-box',
        borderLeft: i === 0 ? 'none' : '1px solid var(--border-subtle)'
      }
    }, lines.map((l, j) => /*#__PURE__*/React.createElement("div", {
      key: j,
      style: {
        font: 'var(--type-poster-sm)',
        fontSize: 19,
        lineHeight: 1.12,
        fontStretch: 'var(--display-stretch)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--track-strip)',
        overflowWrap: 'break-word',
        color: accentLast && isLast ? 'var(--text-accent)' : 'var(--text-strong)'
      }
    }, l)));
  }));
}
Object.assign(__ds_scope, { TaglineStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TaglineStrip.jsx", error: String((e && e.message) || e) }); }

// components/content/ChecklistItem.jsx
try { (() => {
function ChecklistItem({
  children,
  tone = 'blue',
  style
}) {
  const colors = {
    blue: 'var(--blue-600)',
    white: 'var(--white)',
    green: 'var(--green-600)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "vel-icon vel-icon--filled",
    style: {
      fontSize: 22,
      color: colors[tone],
      flex: '0 0 auto',
      marginTop: 1
    }
  }, "check_circle"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: tone === 'white' ? 'var(--white)' : 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { ChecklistItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ChecklistItem.jsx", error: String((e && e.message) || e) }); }

// components/content/LogoWall.jsx
try { (() => {
function LogoWall({
  logos,
  columns = 6,
  grayscale = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      gap: 'var(--space-8) var(--space-10)',
      alignItems: 'center',
      ...style
    }
  }, logos.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 48
    }
  }, l.src ? /*#__PURE__*/React.createElement("img", {
    src: l.src,
    alt: l.name,
    style: {
      maxHeight: 40,
      maxWidth: '100%',
      objectFit: 'contain',
      filter: grayscale ? 'grayscale(1)' : 'none',
      opacity: grayscale ? 0.62 : 1
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontSize: 15,
      color: 'var(--grey-400)',
      textAlign: 'center',
      letterSpacing: 'var(--track-strip)'
    }
  }, l.name))));
}
Object.assign(__ds_scope, { LogoWall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/LogoWall.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label,
  onDark = false,
  align = 'left',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-poster-md)',
      fontSize: 52,
      fontStretch: 'var(--display-stretch)',
      letterSpacing: 'var(--track-poster)',
      lineHeight: 1,
      color: onDark ? 'var(--white)' : 'var(--text-accent)'
    }
  }, value), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      font: 'var(--type-body-sm)',
      maxWidth: '22ch',
      color: onDark ? 'var(--text-on-brand-muted)' : 'var(--text-muted)',
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/StepItem.jsx
try { (() => {
function StepItem({
  step,
  title,
  body,
  last = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-circle)',
      background: 'var(--surface-brand)',
      color: 'var(--white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--type-h4)',
      fontSize: 19
    }
  }, step), last ? null : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      width: 2,
      background: 'var(--blue-200)',
      marginTop: 8
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: last ? 0 : 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      font: 'var(--type-h4)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      maxWidth: '58ch'
    }
  }, body)));
}
Object.assign(__ds_scope, { StepItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepItem.jsx", error: String((e && e.message) || e) }); }

// components/content/SuccessStoryCard.jsx
try { (() => {
function SuccessStoryCard({
  image,
  name,
  role,
  employerLogo,
  summary,
  href,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      color: 'inherit',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'var(--hover-lift)' : 'none',
      transition: 'var(--transition-interactive)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 9',
      background: 'var(--grey-100)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--pad-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--type-h4)'
    }
  }, name), role ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-accent)',
      marginTop: 2
    }
  }, role) : null), employerLogo ? /*#__PURE__*/React.createElement("img", {
    src: employerLogo,
    alt: "",
    style: {
      height: 28,
      width: 'auto'
    }
  }) : null), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      flex: 1
    }
  }, summary), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-button)',
      fontSize: 15,
      color: 'var(--text-accent)'
    }
  }, "Read this apprentice\u2019s story", /*#__PURE__*/React.createElement("span", {
    className: "vel-icon",
    style: {
      fontSize: 19,
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-standard)'
    }
  }, "arrow_forward"))));
}
Object.assign(__ds_scope, { SuccessStoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SuccessStoryCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  name,
  role,
  org,
  logo,
  avatar,
  tone = 'panel',
  style
}) {
  const dark = tone === 'brand';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? 'var(--surface-brand)' : 'var(--surface-panel)',
      color: dark ? 'var(--white)' : 'var(--text-body)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--pad-panel)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "vel-icon",
    style: {
      fontSize: 34,
      color: dark ? 'rgba(255,255,255,0.6)' : 'var(--blue-300)'
    }
  }, "format_quote"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-lead)',
      fontSize: 19,
      color: dark ? 'var(--white)' : 'var(--text-body)',
      flex: 1
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, avatar ? /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-circle)',
      objectFit: 'cover'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: dark ? 'var(--white)' : 'var(--text-strong)'
    }
  }, name), role || org ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: dark ? 'var(--text-on-brand-muted)' : 'var(--text-muted)'
    }
  }, [role, org].filter(Boolean).join(' · ')) : null), logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "",
    style: {
      height: 30,
      width: 'auto',
      opacity: dark ? 1 : 0.9
    }
  }) : null));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--gap-inline)',
  border: '2px solid transparent',
  cursor: 'pointer',
  font: 'var(--type-button)',
  letterSpacing: 'var(--track-strip)',
  borderRadius: 'var(--radius-pill)',
  textDecoration: 'none',
  transition: 'var(--transition-interactive)',
  whiteSpace: 'nowrap'
};
const sizes = {
  sm: {
    padding: '9px 18px',
    fontSize: 14
  },
  md: {
    padding: '14px 26px',
    fontSize: 16
  },
  lg: {
    padding: '18px 34px',
    fontSize: 18
  }
};
const looks = {
  primary: {
    background: 'var(--surface-brand)',
    color: 'var(--text-on-brand)',
    boxShadow: 'var(--shadow-brand)'
  },
  secondary: {
    background: 'var(--white)',
    color: 'var(--text-strong)',
    borderColor: 'var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-accent)'
  },
  inverse: {
    background: 'var(--white)',
    color: 'var(--blue-700)'
  },
  'inverse-outline': {
    background: 'transparent',
    color: 'var(--white)',
    borderColor: 'var(--border-on-dark)'
  }
};
const hovers = {
  primary: {
    background: 'var(--brand-hover)'
  },
  secondary: {
    borderColor: 'var(--blue-600)',
    color: 'var(--text-accent)'
  },
  ghost: {
    background: 'var(--surface-brand-soft)'
  },
  inverse: {
    background: 'var(--blue-50)'
  },
  'inverse-outline': {
    background: 'rgba(255,255,255,0.12)',
    borderColor: 'var(--white)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  href,
  fullWidth = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const s = {
    ...base,
    ...sizes[size],
    ...looks[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(fullWidth ? {
      display: 'flex',
      width: '100%'
    } : null),
    ...(press && !disabled ? {
      transform: 'var(--press-translate)'
    } : null),
    ...(disabled ? {
      opacity: 0.45,
      cursor: 'not-allowed',
      boxShadow: 'none'
    } : null),
    ...style
  };
  const glyph = icon ? /*#__PURE__*/React.createElement("span", {
    className: "vel-icon",
    style: {
      fontSize: '1.25em',
      fontVariationSettings: "'FILL' 0, 'wght' 600"
    }
  }, icon) : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: href ? undefined : disabled,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconPosition === 'left' ? glyph : null, /*#__PURE__*/React.createElement("span", null, children), iconPosition === 'right' ? glyph : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  white: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-card)',
    boxShadow: 'var(--shadow-sm)'
  },
  panel: {
    background: 'var(--surface-panel)',
    border: '1px solid transparent'
  },
  brand: {
    background: 'var(--surface-brand)',
    border: '1px solid transparent',
    color: 'var(--text-on-brand)'
  },
  dark: {
    background: 'var(--surface-dark)',
    border: '1px solid var(--border-on-dark)',
    color: 'var(--text-on-brand)'
  },
  glass: {
    background: 'var(--glass-bg)',
    backdropFilter: 'var(--glass-blur)',
    border: 'var(--glass-border)',
    boxShadow: 'var(--glass-shadow)'
  }
};
function Card({
  children,
  tone = 'white',
  padding = 'var(--pad-card)',
  radius = 'var(--radius-lg)',
  interactive = false,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      borderRadius: radius,
      padding,
      boxSizing: 'border-box',
      transition: 'var(--transition-interactive)',
      textDecoration: 'none',
      color: 'inherit',
      ...tones[tone],
      ...(interactive ? {
        cursor: 'pointer'
      } : null),
      ...(interactive && hover ? {
        transform: 'var(--hover-lift)',
        boxShadow: 'var(--shadow-md)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconTile.jsx
try { (() => {
const sizes = {
  sm: 40,
  md: 56,
  lg: 72
};
const tones = {
  tint: {
    background: 'var(--surface-icon-tile)',
    color: 'var(--blue-600)'
  },
  solid: {
    background: 'var(--surface-brand)',
    color: 'var(--white)'
  },
  white: {
    background: 'var(--white)',
    color: 'var(--blue-600)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--white)',
    boxShadow: 'var(--neon-ring)'
  }
};
function IconTile({
  icon,
  size = 'md',
  tone = 'tint',
  filled = false,
  shape = 'circle',
  style
}) {
  const d = sizes[size];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: d,
      height: d,
      flex: `0 0 ${d}px`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: shape === 'circle' ? 'var(--radius-circle)' : 'var(--radius-md)',
      ...tones[tone],
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "vel-icon",
    style: {
      fontSize: Math.round(d * 0.48),
      fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 500`
    }
  }, icon));
}
Object.assign(__ds_scope, { IconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconTile.jsx", error: String((e && e.message) || e) }); }

// components/brand/CtaBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CtaBanner({
  title,
  subtitle,
  icon = 'school',
  href,
  onDark = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      background: onDark ? 'var(--white)' : 'var(--surface-brand)',
      color: onDark ? 'var(--navy-900)' : 'var(--text-on-brand)',
      borderRadius: 'var(--radius-lg)',
      padding: '18px 26px',
      textDecoration: 'none',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-brand)',
      transition: 'var(--transition-interactive)',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.IconTile, {
    icon: icon,
    tone: onDark ? 'solid' : 'white',
    size: "md"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      alignSelf: 'stretch',
      background: onDark ? 'var(--border-subtle)' : 'rgba(255,255,255,0.35)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-h4)',
      color: 'inherit'
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-body-sm)',
      color: onDark ? 'var(--text-muted)' : 'var(--text-on-brand-muted)',
      marginTop: 2
    }
  }, subtitle) : null), /*#__PURE__*/React.createElement("span", {
    className: "vel-icon",
    style: {
      fontSize: 30,
      transform: hover ? 'translateX(3px)' : 'none',
      transition: `transform var(--dur-fast) var(--ease-standard)`
    }
  }, "chevron_right"));
}
Object.assign(__ds_scope, { CtaBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/CtaBanner.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureItem.jsx
try { (() => {
function FeatureItem({
  icon,
  title,
  body,
  layout = 'stack',
  tone = 'tint',
  filled = false,
  onDark = false,
  style
}) {
  const row = layout === 'row';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: row ? 'row' : 'column',
      gap: row ? 'var(--space-4)' : 'var(--space-3)',
      alignItems: row ? 'flex-start' : 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconTile, {
    icon: icon,
    tone: tone,
    filled: filled,
    size: row ? 'md' : 'md'
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-poster-sm)',
      fontSize: 15,
      lineHeight: 1.2,
      fontStretch: 'var(--display-stretch)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-strip)',
      color: onDark ? 'var(--white)' : 'var(--text-strong)'
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      font: 'var(--type-body-sm)',
      color: onDark ? 'var(--text-on-brand-muted)' : 'var(--text-muted)'
    }
  }, body) : null));
}
Object.assign(__ds_scope, { FeatureItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureItem.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  accent,
  lead,
  align = 'left',
  onDark = false,
  rule = true,
  poster = false,
  style
}) {
  const ink = onDark ? 'var(--white)' : 'var(--text-strong)';
  const accentInk = onDark ? 'var(--text-on-dark-accent)' : 'var(--text-accent)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      gap: 'var(--space-4)',
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "vel-eyebrow",
    style: {
      color: onDark ? 'var(--text-on-dark-accent)' : 'var(--text-accent)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      color: ink,
      font: poster ? 'var(--type-poster-md)' : 'var(--type-h2)',
      fontStretch: poster ? 'var(--display-stretch)' : 'normal',
      textTransform: poster ? 'uppercase' : 'none',
      letterSpacing: poster ? 'var(--track-poster)' : 'var(--track-tight)'
    }
  }, title, accent ? /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: accentInk
    }
  }, accent)) : null), rule ? /*#__PURE__*/React.createElement("span", {
    className: "vel-rule",
    style: onDark ? {
      background: 'var(--white)'
    } : undefined
  }) : null, lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-lead)',
      color: onDark ? 'var(--text-on-brand-muted)' : 'var(--text-body)',
      maxWidth: '52ch'
    }
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const tones = {
  tint: {
    background: 'var(--surface-brand-soft)',
    color: 'var(--blue-700)'
  },
  solid: {
    background: 'var(--surface-brand)',
    color: 'var(--white)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-accent)',
    boxShadow: 'inset 0 0 0 1.5px var(--blue-300)'
  },
  neutral: {
    background: 'var(--grey-100)',
    color: 'var(--grey-600)'
  },
  success: {
    background: 'var(--green-100)',
    color: 'var(--green-600)'
  },
  onDark: {
    background: 'rgba(255,255,255,0.14)',
    color: 'var(--white)'
  }
};
function Tag({
  children,
  tone = 'tint',
  icon,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--type-caption)',
      fontWeight: 'var(--w-bold)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      ...tones[tone],
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "vel-icon",
    style: {
      fontSize: 15
    }
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/CourseCard.jsx
try { (() => {
function CourseCard({
  image,
  level,
  title,
  body,
  href,
  cta = 'Explore',
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      color: 'inherit',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'var(--hover-lift)' : 'none',
      transition: 'var(--transition-interactive)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 9',
      background: 'var(--grey-100)',
      overflow: 'hidden'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null, level ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: "solid"
  }, level)) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--pad-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--type-h3)',
      letterSpacing: 'var(--track-tight)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      flex: 1
    }
  }, body), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-button)',
      color: 'var(--text-accent)'
    }
  }, cta, /*#__PURE__*/React.createElement("span", {
    className: "vel-icon",
    style: {
      fontSize: 20,
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-standard)'
    }
  }, "arrow_forward"))));
}
Object.assign(__ds_scope, { CourseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CourseCard.jsx", error: String((e && e.message) || e) }); }

// components/content/NewsCard.jsx
try { (() => {
function NewsCard({
  category = 'Blog',
  title,
  excerpt,
  href,
  date,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      textDecoration: 'none',
      color: 'inherit',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--pad-panel)',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transition: 'var(--transition-interactive)',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: "tint"
  }, category), date ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, date) : null), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--type-h3)',
      fontSize: 26,
      letterSpacing: 'var(--track-tight)',
      color: hover ? 'var(--text-accent)' : 'var(--text-strong)',
      transition: 'color var(--dur-fast) var(--ease-standard)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      flex: 1
    }
  }, excerpt), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-button)',
      fontSize: 15,
      color: 'var(--text-accent)'
    }
  }, "Read this article", /*#__PURE__*/React.createElement("span", {
    className: "vel-icon",
    style: {
      fontSize: 19,
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-standard)'
    }
  }, "arrow_forward")));
}
Object.assign(__ds_scope, { NewsCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/NewsCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  style
}) {
  const [internal, setInternal] = React.useState(false);
  const on = checked === undefined ? internal : checked;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: '0 0 22px',
      borderRadius: 'var(--radius-xs)',
      border: `2px solid ${on ? 'var(--blue-600)' : 'var(--border-strong)'}`,
      background: on ? 'var(--blue-600)' : 'var(--white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition-interactive)',
      marginTop: 1
    }
  }, on ? /*#__PURE__*/React.createElement("span", {
    className: "vel-icon",
    style: {
      fontSize: 17,
      color: 'var(--white)',
      fontVariationSettings: "'wght' 700"
    }
  }, "check") : null), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldBase = {
  width: '100%',
  boxSizing: 'border-box',
  font: 'var(--type-body)',
  color: 'var(--text-body)',
  background: 'var(--white)',
  border: '1px solid var(--border-strong)',
  borderRadius: 'var(--radius-md)',
  padding: '13px 16px',
  transition: 'var(--transition-interactive)',
  outline: 'none'
};
function Input({
  label,
  hint,
  error,
  multiline = false,
  rows = 4,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-strong)'
    }
  }, label) : null, /*#__PURE__*/React.createElement(Tag, _extends({
    id: uid,
    rows: multiline ? rows : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldBase,
      ...(multiline ? {
        resize: 'vertical',
        font: 'var(--type-body)',
        minHeight: rows * 26
      } : null),
      ...(focus ? {
        borderColor: 'var(--blue-600)',
        boxShadow: '0 0 0 3px rgba(0,110,252,0.16)'
      } : null),
      ...(error ? {
        borderColor: 'var(--red-600)'
      } : null)
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--red-600)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options,
  hint,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-strong)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      background: 'var(--white)',
      border: `1px solid ${focus ? 'var(--blue-600)' : 'var(--border-strong)'}`,
      boxShadow: focus ? '0 0 0 3px rgba(0,110,252,0.16)' : 'none',
      borderRadius: 'var(--radius-md)',
      padding: '13px 44px 13px 16px',
      transition: 'var(--transition-interactive)',
      outline: 'none'
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    className: "vel-icon",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--blue-600)',
      fontSize: 22
    }
  }, "expand_more")), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/layout/PageHero.jsx
try { (() => {
function PageHero({
  eyebrow,
  title,
  accent,
  lead,
  image,
  actions,
  script,
  tone = 'photo',
  height = 520,
  style
}) {
  const onDark = tone === 'brand' || tone === 'night';
  const bg = {
    photo: 'var(--surface-page)',
    brand: 'var(--gradient-brand)',
    night: 'var(--gradient-night)',
    tint: 'var(--gradient-brand-soft)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: bg,
      overflow: 'hidden',
      ...style
    }
  }, tone === 'photo' && image ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center right'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-photo-fade)'
    }
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-20) var(--gutter)',
      minHeight: height,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'var(--space-5)'
    }
  }, script ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'var(--space-8)',
      right: 'var(--gutter)'
    }
  }, script) : null, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "vel-eyebrow",
    style: {
      color: onDark ? 'var(--ice-200)' : 'var(--text-accent)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      maxWidth: '17ch',
      font: 'var(--type-poster-lg)',
      fontStretch: 'var(--display-stretch)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-poster)',
      color: onDark ? 'var(--white)' : 'var(--text-strong)'
    }
  }, title, accent ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: onDark ? 'var(--ice-200)' : 'var(--text-accent)'
    }
  }, accent)) : null), /*#__PURE__*/React.createElement("span", {
    className: "vel-rule",
    style: onDark ? {
      background: 'var(--white)'
    } : undefined
  }), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-lead)',
      maxWidth: '40ch',
      color: onDark ? 'var(--text-on-brand-muted)' : 'var(--text-body)'
    }
  }, lead) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-2)'
    }
  }, actions) : null));
}
Object.assign(__ds_scope, { PageHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PageHero.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function Section({
  children,
  tone = 'page',
  width = 'var(--container)',
  pad = 'var(--section-y)',
  id,
  style
}) {
  const grounds = {
    page: {
      background: 'var(--surface-page)'
    },
    tint: {
      background: 'var(--surface-page-tint)'
    },
    panel: {
      background: 'var(--surface-panel)'
    },
    brand: {
      background: 'var(--gradient-brand)',
      color: 'var(--text-on-brand)'
    },
    dark: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-brand)'
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      ...grounds[tone],
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: width,
      margin: '0 auto',
      padding: `${pad} var(--gutter)`
    }
  }, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/layout/SplitFeature.jsx
try { (() => {
function SplitFeature({
  image,
  imageSide = 'left',
  title,
  body,
  actions,
  tone = 'page',
  style
}) {
  const imgFirst = imageSide === 'left';
  const panel = tone === 'panel';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'var(--space-12)',
      alignItems: 'center',
      background: panel ? 'var(--surface-panel)' : 'transparent',
      borderRadius: panel ? 'var(--radius-lg)' : 0,
      padding: panel ? 'var(--pad-panel)' : 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      order: imgFirst ? 0 : 1,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      aspectRatio: '16 / 9',
      background: 'var(--grey-100)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      order: imgFirst ? 1 : 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--type-h2)',
      fontSize: 34
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "vel-rule"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, body), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-2)'
    }
  }, actions) : null));
}
Object.assign(__ds_scope, { SplitFeature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SplitFeature.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
const POLICIES = ['Terms & Conditions', 'Privacy Policy', 'Modern Slavery Statement', 'Safeguarding', 'Prevent Risk Assessment', 'Health & Safety', 'Equality & Diversity', 'Complaints Procedure'];
function SiteFooter({
  base = '',
  policies = POLICIES,
  year = 2026,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-brand)',
      padding: 'var(--space-16) var(--gutter) var(--space-8)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-10)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "white",
    height: 62,
    base: base
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, ['LinkedIn', 'YouTube'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-circle)',
      border: '1px solid var(--border-on-dark)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--white)',
      font: 'var(--type-caption)',
      textDecoration: 'none'
    },
    "aria-label": n
  }, n === 'LinkedIn' ? 'in' : '▶')))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-3) var(--space-6)',
      borderTop: '1px solid var(--border-on-dark)',
      paddingTop: 'var(--space-8)'
    }
  }, policies.map(p => /*#__PURE__*/React.createElement("a", {
    key: p,
    href: "#",
    style: {
      font: 'var(--type-body-sm)',
      fontWeight: 'var(--w-regular)',
      color: 'var(--text-on-brand-muted)',
      textDecoration: 'none'
    }
  }, p))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'rgba(255,255,255,0.55)'
    }
  }, "\xA9 Velocity Academy ", year)));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function SiteHeader({
  items,
  active,
  onNavigate,
  base = '',
  sticky = true,
  style
}) {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    onMouseLeave: () => setOpen(null),
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 40,
      background: 'var(--white)',
      borderBottom: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xs)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '14px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('home');
    },
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: 48,
    base: base
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      flex: 1,
      justifyContent: 'flex-end'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    onMouseEnter: () => setOpen(it.children ? it.id : null),
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate && onNavigate(it.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '10px 2px',
      font: 'var(--type-button)',
      fontSize: 15,
      color: active === it.id ? 'var(--text-accent)' : 'var(--text-strong)',
      borderBottom: `2px solid ${active === it.id ? 'var(--blue-600)' : 'transparent'}`,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      transition: 'var(--transition-interactive)'
    }
  }, it.label, it.children ? /*#__PURE__*/React.createElement("span", {
    className: "vel-icon",
    style: {
      fontSize: 18
    }
  }, "expand_more") : null), it.children && open === it.id ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: -14,
      minWidth: 250,
      background: 'var(--white)',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-2)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, it.children.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => {
      setOpen(null);
      onNavigate && onNavigate(c.id);
    },
    style: {
      background: 'none',
      border: 'none',
      textAlign: 'left',
      cursor: 'pointer',
      padding: '11px 14px',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--type-body-sm)',
      fontWeight: 'var(--w-semibold)',
      color: 'var(--text-strong)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--surface-panel)';
      e.currentTarget.style.color = 'var(--text-accent)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'none';
      e.currentTarget.style.color = 'var(--text-strong)';
    }
  }, c.label))) : null)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: () => onNavigate && onNavigate('contact'),
    icon: null
  }, "Contact Us"))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CourseScreen.jsx
try { (() => {
const {
  PageHero,
  Section,
  SectionHeading,
  Button,
  Card,
  Tag,
  IconTile,
  FeatureItem,
  ChecklistItem,
  CtaBanner,
  Input,
  Select,
  Checkbox,
  TestimonialCard
} = window.DS;
const MODULES = [{
  icon: 'lightbulb',
  title: 'AI foundations',
  body: 'How large language models work, what they can and cannot do, and where they fit in a business process.'
}, {
  icon: 'settings',
  title: 'Automation practice',
  body: 'Designing, building and monitoring automations against a real workplace process.'
}, {
  icon: 'database',
  title: 'Data for AI',
  body: 'Sourcing, cleaning and governing the data that AI systems depend on.'
}, {
  icon: 'shield',
  title: 'Responsible use',
  body: 'Ethics, bias, information security and the organisational policy that keeps AI safe to use.'
}, {
  icon: 'groups',
  title: 'Stakeholder engagement',
  body: 'Taking colleagues with you — the difference between a tool bought and a capability built.'
}, {
  icon: 'workspace_premium',
  title: 'End-point assessment',
  body: 'Portfolio, project and professional discussion, mapped to the occupational standard.'
}];
const FACTS = [['Level', 'Level 4'], ['Duration', '18 months + EPA'], ['Delivery', 'Live online classes'], ['Off-the-job', '6 hours per week']];
function CourseScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    tone: "photo",
    image: window.IMG.office,
    height: 470,
    eyebrow: "AI & Automation Practitioner",
    title: "Buying AI tools is easy.",
    accent: "Building capability is harder.",
    lead: "Technology investment only creates value when your people know how to use AI effectively, responsibly and consistently.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      icon: "arrow_forward"
    }, "Enquire about this programme"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      icon: "play_arrow",
      iconPosition: "left"
    }, "Watch the explainer"))
  }), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-12)"
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "panel",
    padding: "var(--pad-panel)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
      gap: 'var(--space-8)'
    }
  }, FACTS.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      borderLeft: '1px solid var(--border-subtle)',
      paddingLeft: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h4)',
      marginTop: 6
    }
  }, v)))))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-12)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "What apprentices",
    accent: "learn",
    style: {
      marginBottom: 'var(--space-12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-10) var(--gap-card)'
    }
  }, MODULES.map(m => /*#__PURE__*/React.createElement(FeatureItem, {
    key: m.title,
    layout: "row",
    icon: m.icon,
    title: m.title,
    body: m.body
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "tint"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Training that builds skills.",
    accent: "And earns a recognised qualification."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--gap-card)',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--pad-card)",
    style: {
      flex: '0 0 34%'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      font: 'var(--type-h4)'
    }
  }, "Short course"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 18px',
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Builds knowledge."), /*#__PURE__*/React.createElement(IconTile, {
    icon: "lightbulb"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--pad-card)",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      font: 'var(--type-h4)'
    }
  }, "Apprenticeship"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 18px',
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Builds knowledge, real-world experience and a recognised qualification."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, [['lightbulb', 'Knowledge'], ['work', 'Workplace application'], ['groups', 'Expert coaching'], ['workspace_premium', 'Recognised qualification']].map(([i, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: 'center',
      width: 96
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    icon: i,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, l))))))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--pad-panel)"
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "tint",
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, "Enquire"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-6)',
      font: 'var(--type-h3)',
      fontSize: 26
    }
  }, "Ask about this programme"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Jane Fletcher"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    placeholder: "you@company.co.uk"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "How many learners?",
    options: ['1–5', '6–20', '21–50', '50+']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Annual pay bill",
    options: ['Under £3 million', 'Over £3 million', 'Not sure'],
    hint: "This determines how your programme is funded."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I'd like to hear about new apprenticeship standards and funding changes."
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    icon: "arrow_forward"
  }, "Send enquiry"))))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-16)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--gap-card)'
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    tone: "brand",
    quote: "Apprentices bring a fresh perspective and willingness to challenge the status quo. They bridge the gap between traditional engineering practices and the digital future of the rail industry.",
    name: "Michael Joy",
    role: "Apprentice & Training Manager",
    org: "Hitachi Rail"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      justifyContent: 'center'
    }
  }, ['100% funded for learners aged 16–21', '95% funded to upskill existing employees aged 22+', 'Additional £1,000 incentive for a 16–18 new starter'].map(t => /*#__PURE__*/React.createElement(ChecklistItem, {
    key: t
  }, t)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "arrow_forward",
    onClick: () => go('employers')
  }, "How funding works"))))), /*#__PURE__*/React.createElement(Section, {
    tone: "tint",
    pad: "var(--space-12)"
  }, /*#__PURE__*/React.createElement(CtaBanner, {
    title: "Develop AI capability in your team with Velocity Academy apprenticeships.",
    href: "#"
  })));
}
Object.assign(window, {
  CourseScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CourseScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EmployersScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  PageHero,
  Section,
  SectionHeading,
  Button,
  Card,
  ChecklistItem,
  StepItem,
  FeatureItem,
  IconTile,
  CtaBanner,
  TaglineStrip,
  Tag,
  ScriptTagline
} = window.DS;
const FUNDING = [{
  pct: '100%',
  who: 'Levy-paying employer',
  rule: 'Annual pay bill over £3 million. Funds are calculated and paid through your apprenticeship service account.',
  tone: 'brand'
}, {
  pct: '100%',
  who: 'Non-levy — learner aged 16–21',
  rule: 'Annual pay bill under £3 million, any payroll size. Plus £1,000 for enrolling an apprentice aged 16–18.',
  tone: 'panel'
}, {
  pct: '95%',
  who: 'Non-levy — learner aged 22+',
  rule: 'Annual pay bill under £3 million. You co-invest the remaining 5% of training costs.',
  tone: 'panel'
}];
const USES = ['Hire mid to entry-level talent', 'Re-skill employees to work in different departments', 'Up-skill employees to take on additional responsibility', 'Create a skills focussed career pathway for employees'];
const STEPS = [{
  step: '1',
  title: 'Understand your Levy spend',
  body: 'If your annual pay bill is more than £3 million, work out your monthly levy contributions by calculating 0.5% of your gross annual payroll and divide by 12. If levy payments apply to you, the funding to spend will be in your apprenticeships service account.'
}, {
  step: '2',
  title: 'Identify your skills gaps',
  body: 'Identify across your business where there\u2019s a need for upskilling, and consider how apprenticeship programmes could help to develop employee tech, data, marketing and management skills.'
}, {
  step: '3',
  title: 'Launch a pilot scheme',
  body: 'If you\u2019ve never offered apprenticeships to your teams before, start small with a pilot scheme \u2014 launch a small cohort of learners on one programme.'
}, {
  step: '4',
  title: 'Measure impact',
  body: 'Track the productivity, retention and progression outcomes of the cohort, then scale the programmes that moved your business objectives.'
}];
function EmployersScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    tone: "night",
    height: 480,
    title: "Don't just spend your levy.",
    accent: "Invest it.",
    lead: "Turn your apprenticeship funding into real business capability.",
    script: /*#__PURE__*/React.createElement(ScriptTagline, {
      lines: ['Skills today.', 'Brighter', 'tomorrows.'],
      size: 26,
      onDark: true
    }),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "inverse",
      icon: "arrow_forward"
    }, "Talk to a funding expert"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "inverse-outline",
      icon: "download",
      iconPosition: "left"
    }, "Download the funding guide"))
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
      gap: 'var(--gap-card)'
    }
  }, [{
    icon: 'memory',
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Build", /*#__PURE__*/React.createElement("br", null), "AI capability")
  }, {
    icon: 'laptop_mac',
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Strengthen", /*#__PURE__*/React.createElement("br", null), "IT teams")
  }, {
    icon: 'campaign',
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Develop", /*#__PURE__*/React.createElement("br", null), "marketers")
  }, {
    icon: 'trending_up',
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Improve", /*#__PURE__*/React.createElement("br", null), "retention")
  }].map((f, i) => /*#__PURE__*/React.createElement(FeatureItem, {
    key: i,
    icon: f.icon,
    title: f.title
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "tint"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Funding options",
    title: "What the levy covers,",
    accent: "and who pays what",
    lead: "The Apprenticeship Levy is a monthly 0.5% tax that employers must pay if they have an annual pay bill of over \xA33 million. This tax money works as a kind of apprenticeship voucher, which is then given back to organisations (+10% extra from the government) to spend solely on apprenticeships.",
    style: {
      marginBottom: 'var(--space-12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--gap-card)'
    }
  }, FUNDING.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.who,
    tone: f.tone,
    padding: "var(--pad-panel)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-poster-md)',
      fontSize: 56,
      fontStretch: 'var(--display-stretch)',
      letterSpacing: 'var(--track-poster)',
      lineHeight: 1,
      color: f.tone === 'brand' ? 'var(--white)' : 'var(--text-accent)'
    }
  }, f.pct), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h4)',
      fontSize: 19,
      margin: '14px 0 10px',
      color: f.tone === 'brand' ? 'var(--white)' : 'var(--text-strong)'
    }
  }, f.who), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-sm)',
      color: f.tone === 'brand' ? 'var(--text-on-brand-muted)' : 'var(--text-muted)'
    }
  }, f.rule)))), /*#__PURE__*/React.createElement(Card, {
    tone: "white",
    padding: "var(--pad-panel)",
    style: {
      marginTop: 'var(--gap-card)',
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    icon: "schedule",
    tone: "tint"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)'
    }
  }, "If funds are not used within 24 months they will expire and be paid to the government, essentially becoming an additional tax."))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "You can use your",
    accent: "apprenticeship levy to:"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-8)'
    }
  }, USES.map(u => /*#__PURE__*/React.createElement(ChecklistItem, {
    key: u
  }, u))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "arrow_forward",
    onClick: () => go('course')
  }, "See the programmes"))), /*#__PURE__*/React.createElement(Card, {
    tone: "panel",
    padding: "var(--pad-panel)"
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "solid",
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, "Levy transfer"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)'
    }
  }, "A levy-paying employer can transfer a maximum of 50% of their apprenticeship funding to your business. This can be used to cover 100% of training costs to upskill existing employees or hire in new apprentices."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "If the apprenticeship levy transfer is of interest, contact one of our funding experts and we will source a levy donor for your programmes.")))), /*#__PURE__*/React.createElement(Section, {
    tone: "tint"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Four steps",
    title: "Apprenticeship levy",
    accent: "checklist",
    style: {
      marginBottom: 'var(--space-12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement(StepItem, _extends({
    key: s.step
  }, s, {
    last: i === STEPS.length - 1
  }))))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-16)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)',
      gap: 'var(--gap-card)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(CtaBanner, {
    title: "Apprenticeships",
    subtitle: "A smarter investment in your people.",
    href: "#"
  }), /*#__PURE__*/React.createElement(TaglineStrip, {
    items: ['INVEST\nIN PEOPLE.', 'BUILD STRONGER\nBUSINESSES.']
  }))));
}
Object.assign(window, {
  EmployersScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EmployersScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  PageHero,
  Section,
  SectionHeading,
  SplitFeature,
  Button,
  ScriptTagline,
  CourseCard,
  SuccessStoryCard,
  NewsCard,
  TestimonialCard,
  LogoWall,
  StatBlock,
  CtaBanner,
  Card
} = window.DS;
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    tone: "photo",
    image: window.IMG.office,
    height: 560,
    title: "Digital",
    accent: "Apprenticeships",
    lead: "Upskilling teams through apprenticeship levy funded solutions.",
    script: /*#__PURE__*/React.createElement(ScriptTagline, {
      lines: ['Skills today.', 'Brighter', 'tomorrows.'],
      size: 28
    }),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      icon: "arrow_forward",
      onClick: () => go('employers')
    }, "Employers"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      icon: "arrow_forward",
      onClick: () => go('story')
    }, "Students"))
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "For career focused employees and",
    accent: "industry leading organisations"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-6) 0 0',
      font: 'var(--type-body)'
    }
  }, "Trusted by some of the largest companies in the UK, Velocity Academy are a main provider on the Department of Education's Register of Apprenticeship Training Providers. We deliver first-class training, recruitment and retention solutions through the apprenticeship levy."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)'
    }
  }, "We find and train the best new Digital and Professional Services talent for your organisation. Velocity Academy give our clients access to government-funded solutions for recruitment and training through Ofsted regulated programmes that achieve a tangible benefit to our partner organisations.")), /*#__PURE__*/React.createElement(Card, {
    tone: "panel",
    padding: "var(--pad-panel)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
      gap: 'var(--space-8)'
    }
  }, window.STATS.map(s => /*#__PURE__*/React.createElement(StatBlock, {
    key: s.value,
    value: s.value,
    label: s.label
  })))))), /*#__PURE__*/React.createElement(Section, {
    tone: "tint"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    title: "Empowering business",
    accent: "& employees",
    style: {
      marginBottom: 'var(--space-16)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(SplitFeature, {
    image: window.IMG.office,
    title: "Employers",
    body: "Hire an apprentice or up-skill your current team members through apprenticeships. Government funded apprenticeships allow your team members to gain skills in technical subjects at little to no cost. Hiring an apprentice is also an alternative cost-effective way to build in-house talent, fill skills gaps, and future-proof your workforce.",
    actions: /*#__PURE__*/React.createElement(Button, {
      icon: "arrow_forward",
      onClick: () => go('employers')
    }, "Find Out More")
  }), /*#__PURE__*/React.createElement(SplitFeature, {
    imageSide: "right",
    image: window.IMG.portrait,
    title: "Employees",
    body: "Are you currently employed and want to gain in-demand skills to progress your career and earning potential? A government funded apprenticeship in fields like Data, IT and Marketing are available to help you climb the career ladder. With online classes delivered by expert tutors, you can earn whilst you learn with a Velocity Academy tech apprenticeship.",
    actions: /*#__PURE__*/React.createElement(Button, {
      icon: "arrow_forward",
      onClick: () => go('story')
    }, "Find Out More")
  }))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-16)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    rule: false,
    title: "Organisations who have benefitted from our",
    accent: "upskill programmes",
    style: {
      marginBottom: 'var(--space-12)'
    }
  }), /*#__PURE__*/React.createElement(LogoWall, {
    logos: window.CLIENTS,
    columns: 6
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "tint"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Courses Velocity Academy",
    accent: "offers",
    style: {
      marginBottom: 'var(--space-12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--gap-card)'
    }
  }, window.INDUSTRIES.map(c => /*#__PURE__*/React.createElement(CourseCard, {
    key: c.title,
    image: window.IMG.office,
    level: c.level,
    title: c.title,
    body: c.body,
    cta: c.cta,
    href: "#"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "arrow_forward",
    onClick: () => go('course')
  }, "Explore All Velocity Academy Apprenticeships"))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Success",
    accent: "stories",
    style: {
      marginBottom: 'var(--space-12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--gap-card)'
    }
  }, window.STORIES.map(s => /*#__PURE__*/React.createElement(SuccessStoryCard, {
    key: s.name,
    image: window.IMG.portrait,
    name: s.name,
    role: s.role,
    summary: s.summary,
    href: "#"
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "tint"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Latest news from",
    accent: "Velocity Academy",
    style: {
      marginBottom: 'var(--space-12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
      gap: 'var(--gap-card)'
    }
  }, /*#__PURE__*/React.createElement(NewsCard, {
    title: "Save Over \xA320,000 a Year in Payroll Costs While Building AI Skills",
    excerpt: "Discover how your business could save over \xA320,000 a year in Employer National Insurance while developing valuable AI skills. This article explains how enrolling eligible employees under 25 onto the Level 4 AI & Automation Practitioner Apprenticeship can reduce payroll costs through Class 1 Employer NI relief."
  }), /*#__PURE__*/React.createElement(NewsCard, {
    title: "What's New in the Level 4 Applications Support Lead Apprenticeship?",
    excerpt: "The Level 4 Applications Support Lead apprenticeship has been updated to align with the new Skills England occupational standard, introducing a modernised curriculum that reflects today's digital workplace."
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "What our",
    accent: "clients say",
    style: {
      marginBottom: 'var(--space-12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--gap-card)'
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "I have loved every part of my Marketing apprenticeship with Velocity Academy. Paired with hands on experience at JCB and the outmatched guidance from the Velocity team, I achieved a distinction for this course.",
    name: "Kelsey Asante",
    role: "Marketing Apprentice",
    org: "JCB"
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "Velocity Academy have delivered consistent quality in both teaching and customer services, making them a trusted partner in delivering apprenticeships to our employees.",
    name: "Michael Joy",
    role: "Apprentice & Training Manager",
    org: "Hitachi Rail"
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "Velocity Academy sourced a fantastic Apprentice Developer on our behalf and we couldn't have been happier with the service. They have been outstanding. Thanks Velocity!",
    name: "GivEnergy",
    role: "Client"
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "tint",
    pad: "var(--space-16)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    title: "Ready to",
    accent: "partner with us?",
    style: {
      marginBottom: 'var(--space-10)'
    }
  }), /*#__PURE__*/React.createElement(CtaBanner, {
    title: "Talk to a Velocity Academy apprenticeship levy expert.",
    subtitle: "We'll map your skills gaps and show you what your funding covers.",
    href: "#"
  })));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StoryScreen.jsx
try { (() => {
const {
  Section,
  SectionHeading,
  Button,
  Card,
  Tag,
  IconTile,
  TestimonialCard,
  CtaBanner,
  TaglineStrip,
  SuccessStoryCard,
  ScriptTagline
} = window.DS;
const BLOCKS = [{
  title: 'Challenge',
  body: 'Kelsey, an apprentice from JCB, was tasked with the management and marketing of a promotional event (2025 LCRIG). Kelsey was enrolled onto the Velocity Academy Level 4 Marketing Executive apprenticeship programme to increase her knowledge, skills and behaviours for marketing, including event management.'
}, {
  title: 'Solution',
  body: 'As part of the apprenticeship, Velocity worked with Kelsey and her manager to provide effective and timely course content that met the seasonal needs of the organisation. We provided training on trade shows, planning and measuring a ROI on costs. Along with the training, Kelsey received 1-1 coaching from a qualified, experienced marketer within the Velocity faculty.'
}, {
  title: 'Outcome',
  body: 'Kelsey successfully executed the trade show with her products, produced a ROI on the event and created further brand exposure for JCB. Kelsey also achieved a Distinction in her Marketing Executive apprenticeship.'
}];
function StoryScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--gradient-brand-soft)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-16) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 'var(--space-12)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(ScriptTagline, {
    lines: ['Same people.', 'New possibilities.'],
    size: 26,
    align: "left"
  })), /*#__PURE__*/React.createElement("span", {
    className: "vel-eyebrow"
  }, "Kelsey Asante"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '14px 0 0',
      font: 'var(--type-poster-lg)',
      fontSize: 62,
      fontStretch: 'var(--display-stretch)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-poster)'
    }
  }, "Distinction.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, "Level 4 Marketing"), /*#__PURE__*/React.createElement("br", null), "Executive"), /*#__PURE__*/React.createElement("span", {
    className: "vel-rule",
    style: {
      display: 'block',
      margin: 'var(--space-6) 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "vel-eyebrow",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Hard work."), /*#__PURE__*/React.createElement("span", null, "Real progress."), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, "Brighter tomorrows.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "solid"
  }, "JCB"), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "Marketing"), /*#__PURE__*/React.createElement(Tag, {
    tone: "success",
    icon: "check_circle"
  }, "EPA Completed"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.IMG.portrait,
    alt: "Kelsey Asante",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-xl)',
      aspectRatio: '4/3',
      objectFit: 'cover',
      boxShadow: 'var(--shadow-lg)'
    }
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "glass",
    padding: "14px 18px",
    style: {
      position: 'absolute',
      bottom: 18,
      left: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    icon: "bar_chart",
    filled: true,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontWeight: 600
    }
  }, "Level 4 Marketing Executive"))))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-16)"
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "panel",
    padding: "var(--pad-panel)",
    style: {
      marginBottom: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 10px',
      font: 'var(--type-h4)'
    }
  }, "About our client"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)'
    }
  }, "JCB is a global machinery leader offering apprenticeships in engineering, manufacturing, business, and IT. Apprentices gain hands-on experience, earn qualifications, and build lasting careers in a world-renowned, innovative organisation.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--gap-card)'
    }
  }, BLOCKS.map((b, i) => /*#__PURE__*/React.createElement(Card, {
    key: b.title,
    padding: "var(--pad-panel)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-poster-sm)',
      fontSize: 15,
      color: 'var(--text-accent)'
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--type-h3)',
      fontSize: 24
    }
  }, b.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, b.body))))), /*#__PURE__*/React.createElement(Section, {
    tone: "tint"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    tone: "brand",
    quote: "One of my standout achievements is the execution of the JCB event stand at the 2025 LCRIG show. I was very proud my apprenticeship journey was closely supported by my skills coach Emma. The marketing apprenticeship gave me the opportunity to develop skills such as data analysis, sales and communication, campaign management and market research. I now utilise these skills in a full-time role as a Marketing Communications specialist.",
    name: "Kelsey Asante",
    role: "Marketing Apprentice",
    org: "JCB"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "More",
    accent: "success stories",
    style: {
      marginBottom: 'var(--space-12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--gap-card)'
    }
  }, window.STORIES.map(s => /*#__PURE__*/React.createElement(SuccessStoryCard, {
    key: s.name,
    image: window.IMG.portrait,
    name: s.name,
    role: s.role,
    summary: s.summary,
    href: "#"
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "tint",
    pad: "var(--space-16)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)',
      gap: 'var(--gap-card)'
    }
  }, /*#__PURE__*/React.createElement(CtaBanner, {
    title: "Build a stronger, more skilled workforce with Velocity Academy apprenticeships.",
    href: "#"
  }), /*#__PURE__*/React.createElement(TaglineStrip, {
    items: ['PEOPLE\nPROGRESS.', 'BUSINESSES\nTHRIVE.', 'BRIGHTER\nTOMORROWS.']
  }))));
}
Object.assign(window, {
  StoryScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StoryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.jsx
try { (() => {
const DS = window.VelocityAcademyDesignSystem_eca7fd;
const BASE = '../..';
const IMG = {
  office: BASE + '/assets/photo-open-office.png',
  portrait: BASE + '/assets/photo-learners-session.png',
  session: BASE + '/assets/photo-learners-session.png'
};
const NAV = [{
  id: 'courses',
  label: 'Courses',
  children: [{
    id: 'course',
    label: 'IT'
  }, {
    id: 'course',
    label: 'Marketing'
  }, {
    id: 'course',
    label: 'AI'
  }]
}, {
  id: 'employers',
  label: 'Employers',
  children: [{
    id: 'employers',
    label: 'Upskill Your Team'
  }, {
    id: 'employers',
    label: 'Recruit An Apprentice'
  }, {
    id: 'employers',
    label: 'Apprenticeship Levy'
  }, {
    id: 'employers',
    label: 'Apprenticeship Funding'
  }]
}, {
  id: 'students',
  label: 'Students',
  children: [{
    id: 'story',
    label: 'Find An Apprenticeship'
  }, {
    id: 'story',
    label: 'Success Stories'
  }]
}, {
  id: 'story',
  label: 'Case Studies'
}, {
  id: 'about',
  label: 'About'
}];
const INDUSTRIES = [{
  level: 'Level 4',
  title: 'AI',
  body: 'An AI Apprenticeship is a hands-on, paid route into the fast-growing world of artificial intelligence and automation. It gives individuals the chance to build practical AI skills, work on real-world automation projects, and gain nationally recognised qualifications while earning a salary.',
  cta: 'Explore our AI Apprenticeships'
}, {
  level: 'Level 3',
  title: 'IT',
  body: 'An IT Apprenticeship is a practical, hands-on route into the fast-moving world of tech. It allows individuals to earn a salary while gaining real-world experience and studying towards nationally recognised qualifications.',
  cta: 'Explore our IT Apprenticeships'
}, {
  level: 'Level 4',
  title: 'Marketing',
  body: 'A Marketing Apprenticeship offers a hands-on, paid route into the dynamic world of marketing, allowing individuals to build real industry experience while studying toward recognised qualifications.',
  cta: 'Explore our Marketing Apprenticeships'
}];
const STORIES = [{
  name: 'Kelsey Asante',
  role: 'Multi-Channel Marketer',
  summary: 'Kelsey Asante loved every part of her Marketing apprenticeship with Velocity Academy and JCB. With expert support from Emma Serventi, she developed skills in campaign management, sales and data, earned a distinction, and now works in marketing communications.'
}, {
  name: 'Amy Norfolk',
  role: 'Multi-Channel Marketer',
  summary: 'Amy Norfolk began her Multi-Channel Marketer apprenticeship after connecting with Velocity Academy on LinkedIn. With tailored support and practical training, she built confidence, gained key marketing skills, and now manages digital campaigns at Framework Digital.'
}, {
  name: 'Khalid Khan',
  role: 'Business Administrator',
  summary: 'Khalid Khan completed his apprenticeship with Velocity Academy and Wakefield Council, gaining valuable interview skills and confidence. With expert support from his coach Andy, he learned to structure responses using the STARR method and grew professionally.'
}];
const CLIENTS = ['Centrica', 'JCB', 'NHS', 'Northumbria Police', 'Northumbrian Water', 'Reviews.io', 'South Tyneside Council', 'Thales', 'Ticketmaster', 'Utility Warehouse', 'Wakefield Council', 'Hitachi Rail'].map(name => ({
  name
}));
const STATS = [{
  value: '£200M+',
  label: 'Tracked ROI for our customers to date.'
}, {
  value: '1000+',
  label: 'Learners enrolled through Velocity Academy.'
}, {
  value: '400+',
  label: 'Customers in the UK trust Velocity Academy for their tech training and recruitment.'
}, {
  value: '92%',
  label: 'Increase in customer workforce motivation and satisfaction.'
}];
Object.assign(window, {
  DS,
  BASE,
  IMG,
  NAV,
  INDUSTRIES,
  STORIES,
  CLIENTS,
  STATS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CtaBanner = __ds_scope.CtaBanner;

__ds_ns.GlassChip = __ds_scope.GlassChip;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ScriptTagline = __ds_scope.ScriptTagline;

__ds_ns.TaglineStrip = __ds_scope.TaglineStrip;

__ds_ns.ChecklistItem = __ds_scope.ChecklistItem;

__ds_ns.CourseCard = __ds_scope.CourseCard;

__ds_ns.FeatureItem = __ds_scope.FeatureItem;

__ds_ns.LogoWall = __ds_scope.LogoWall;

__ds_ns.NewsCard = __ds_scope.NewsCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.StepItem = __ds_scope.StepItem;

__ds_ns.SuccessStoryCard = __ds_scope.SuccessStoryCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.PageHero = __ds_scope.PageHero;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.SplitFeature = __ds_scope.SplitFeature;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
