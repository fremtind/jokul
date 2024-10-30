# Migrasjonsguide

## Til `jkl-radio-button-react@6.0.0`

`RadioButtons` splittes i `RadioButtonGroup` og `RadioButton` for å enklere kunne sette props rett på `RadioButton`. Det forenkler bruken av `react-hook-form`.

Den enkleste migreringen til denne versjonen ser du i eksempelet under.

```diff
- <RadioButtons
-     choices={["Enebolig", "Tomannsbolig", "Rekkehus", "Leilighet"]}
+ <RadioButtonGroup
      legend="Hvilken boligtype?"
      name="housetype"
      onChange={(e) => setHouseType(e.target.value)}
-     selectedValue={houseType}
+     value={houseType}
- />
+ >
+     {["Enebolig", "Tomannsbolig", "Rekkehus", "Leilighet"].map((type) => (
+         <RadioButton key={type} label={type} value={type} />
+     ))}
+ </RadioButtonGroup>
```

Om du vil bruke `react-hook-form` med denne nye komponenten vil det kunne se ut som dette.

```jsx
<RadioButtonGroup legend="Hvilken boligtype?">
    {["Enebolig", "Tomannsbolig", "Rekkehus", "Leilighet"].map((type) => (
        <RadioButton
            {...register("housetype", { required: true })}
            key={type}
            label={type}
            value={type}
        />
    ))}
</RadioButtonGroup>
```
