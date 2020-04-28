# first_npm_package

For now, allow to use shadowizard function to change the shadows of images !

# Installation

'npm install first_npm_package --save'

Then...

```
import {
    shadowizard
} from "first_npm_package_godet";

shadowizard({
    shadow_type: 'soft',
    padding: false
});
```
## Options

Shadowizard supports 2 options, both of which are optionnal:

* *shadow_type* - _hard/soft_ (Defaults to soft)
* *padding* -_boolean_ (Defaults to false)