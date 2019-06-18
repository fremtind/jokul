# `text-field`

Input as text field is one of the core form elements.

## Usage

Must have " " as placeholder for animation to work as intended. Also remember aria and htmlFor.

```
<label className="jkl-text-field" htmlFor="demo-field">
    <input aria-invalid={valid} className="jkl-text-field__input" type="text" id="demo-field" placeholder=" " />
    <span className="jkl-text-field__label">{label}</span>
    <span className="jkl-text-field__border"></span>
</label>
```
