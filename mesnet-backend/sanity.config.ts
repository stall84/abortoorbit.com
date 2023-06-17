import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'mes.net',

  projectId: 'idgyj10l',
  dataset: 'prod',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
