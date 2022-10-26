import { Router } from 'https://pkg.do/itty-router'
import { withParams, json } from 'https://pkg.do/itty-router-extras'
import _ from 'https://pkg.do/lodash'

const router = Router()

router.get('/', req => fetch('https://schema.org/version/latest/schemaorg-current-https.jsonld'))
router.get('/:resource?/:id?', withParams, ({url, resource, id}) => json({ url, resource, id}))

export default {
  fetch: router.handle
}
