/* only for building vux.css */
import Style from '../styles/index.vue' // eslint-disable-line
import Switch from './switch'
import Group from './group'
import Cell from './cell'
import InlineDesc from './inline-desc'
import Toast from './toast'
import Alert from './alert'
import Dialog from './dialog'


const vux = {
  Switch,
  InlineDesc,
  Toast,
  Alert,
  Dialog,
  Group,
  Cell
}

module.exports = vux

