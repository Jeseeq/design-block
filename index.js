import Component from 'wireframe-block/component'
import $editor from 'weblium/editor'
import style from './style.css'

const ExtendedWireframe = $editor.hoistStatics($editor.enhancers.withProps({style}))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  foo: 'bar',
  'article__picture-0': {
    resourceRef: '1.jpg'
  }
}

export default ExtendedWireframe

