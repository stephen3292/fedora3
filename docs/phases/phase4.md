# Phase 4 Replies (1 day)

## Rails
### Models
* reply

### Controllers
* Api::repliesController (create, destroy, edit, index)

### Views
* replies/index.json.jbuilder

## Flux
### Views (React Components)
* repliesIndex
  - replyIndexItem
  - newReplyForm

### Stores
* reply

### Actions
* ApiActions.receiveAllreplies
* ApiActions.createreply
* ApiActions.deletereply


### ApiUtil
* ApiUtil.fetchAllreplies
* ApiUtil.createreply
* ApiUtil.destroyreply
* ApiUtil.editreply

## Gems/Libraries
