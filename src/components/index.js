/* only for building vux.css */
import Style from '../styles/index.vue' // eslint-disable-line
import Switch from './switch'
import Group from './group'
import Cell from './cell'
import InlineDesc from './inline-desc'
import Toast from './toast'
import Alert from './alert'
import Dialog from './dialog'
import Loading from './loading'


const vux = {
  Switch,
  InlineDesc,
  Toast,
  Alert,
  Dialog,
  Group,
  Cell,
  Loading
}

module.exports = vux

