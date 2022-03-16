'use strict'

const tty = (module.exports = {})

tty.WriteStream = {
  prototype: {
    hasColors: function () {
      return false
    }
  }
}

module.exports.tty = tty
