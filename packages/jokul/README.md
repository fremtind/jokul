# @fremtind/jokul

Her finner du alle React-komponenter, stilark og diverse utilities

## Oppsett

Du trenger å importere en del basis-stiler for at komponenter skal fungere riktig,
dette gjøres med

```
@use '@fremtind/jokul/core/styles';
```

## SASS mixins

For å få tilgang til mixins vi tilbyr kan du i din .scss fil bruke

```
@use '@fremtind/jokul/core/jkl';
```

## Komponenter

Alle komponentene våre installeres fra denne pakka, enten fra roten

```
import { CalendarIcon, List, Link, Message, TextInput } from '@fremtind/jokul';
```

eller organisert i mapper dersom du foretrekker det

```
import { CalendarIcon } from '@fremtind/jokul/components/icon';
import { List } from '@fremtind/jokul/components/list';
import { Link } from '@fremtind/jokul/components/link';
import { Message } from '@fremtind/jokul/components/message';
import { TextInput } from '@fremtind/jokul/components/text-input';
```

For en full liste over komponenter kan du kikke i [components-mappa](src/components/)

## Stilark

Når du bruker en komponent må du også importere stilen

## Hooks

Akkurat som med komponenter kan disse importeres fra roten

```
import { useAnimatedDetails, useLocalStorage } from '@fremtind/jokul';
```

eller via /hooks stien

```
import { useAnimatedDetails, useLocalStorage } from '@fremtind/jokul/hooks';
```

For en full liste over komponenter kan du kikke i [hooks-mappa](src/hooks/)

## Utilities

Du gjettet riktig, disse kan også hentes fra roten av pakka

```
import { tabListener, unicode } from '@fremtind/jokul';
```

Eller via /utilities stien

```
import { tabListener, unicode } from '@fremtind/jokul/utilities';
```

For en full liste over utilities kan du kikke i [utilities-mappa](src/utilities/)
