# <img src="media/icon.png" width="45" align="left">&nbsp;Youtb Unofficial Youtube app


Running in MacOS

[![youtb in mac](media/screenshot.png)](https://github.com/eriknyk/youtb/releases/latest)

Running in Ubuntu Linux

[![youtb in ubuntu](media/linux_screenshot.png)](https://github.com/eriknyk/youtb/releases/latest)




---
*Requires OS X 10.8+ and Windows and Linux (*tested in ubuntu)

## Install

### Manually

[**Download**](https://github.com/eriknyk/youtb/releases/latest) the latest version for your platform. On OS X, unzip and move `youtb.app` to the `/Applications` directory.

On Linux, unzip to some location. To add a shortcut to the application, create a file in ``~/.local/share/applications`` called ``youtb.desktop`` with the following contents:

```
[Desktop Entry]
Name=youtb
Exec=/full/path/to/folder/Youtb
Terminal=false
Type=Application
Icon=/full/path/to/folder/icon.png

```

## Dev

Built with [Electron](http://electron.atom.io).

###### Commands

- Init: `$ npm install`
- Run: `$ npm start`
- Build: `$ npm run build`


## License

MIT © [Erik Amaru Ortiz](http://github.com/eriknyk)
