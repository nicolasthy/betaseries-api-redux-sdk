[Back to API index](README.md)

# Movies

* [Comments](#module_Comments)
    * _actions_
        * [.doCommentEvent([obj])](#module_Comments.doCommentEvent) ⇒ {Promise}
        * [.doFetchComment([obj])](#module_Comments.doFetchComment) ⇒ {Promise}
        * [.doFetchEpisodeComments([obj])](#module_Comments.doFetchEpisodeComments) ⇒ {Promise}
        * [.doFetchEventComments([obj])](#module_Comments.doFetchEventComments) ⇒ {Promise}
        * [.doFetchShowComments([obj])](#module_Comments.doFetchShowComments) ⇒ {Promise}
    * _reducers_
        * [.comments(state, action)](#module_Comments.comments) ⇒ {Object}
        * [.episodes(state, action)](#module_Comments.episodes) ⇒ {Object}
        * [.events(state, action)](#module_Comments.events) ⇒ {Object}
        * [.shows(state, action)](#module_Comments.shows) ⇒ {Object}
    * _selectors_
        * [.getComment](#module_Comments.getComment) ⇒ {Object}
        * [.getEpisodeComments](#module_Comments.getEpisodeComments) ⇒ {Array}
        * [.getEventComments](#module_Comments.getEventComments) ⇒ {Array}
        * [.getShowComments](#module_Comments.getShowComments) ⇒ {Array}

<a name="module_Comments.doCommentEvent"></a>

### .doCommentEvent([obj])

Add comment on event

**Dispatch**: `COMMENT_EVENT`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.eventId] | {Number} | Event ID |
| [obj.text] | {String} | Text of comment |

**Example**  

```js
BetaSeries.getAction('comments', 'doCommentEvent')({
  eventId: 438,
  text: 'Trop bien cette épisode !',
});
```

<a name="module_Comments.doFetchComment"></a>

### .doFetchComment([obj])

Retrieve comment

**Dispatch**: `FETCH_COMMENT`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.commentId] | {Number} | Comment ID |

**Example**  

```js
BetaSeries.getAction('comments', 'doFetchComment')({ commentId: 438 });
```

<a name="module_Comments.doFetchEpisodeComments"></a>

### .doFetchEpisodeComments([obj])

Retrieve comment of the episode

**Dispatch**: `FETCH_EPISODE_COMMENTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.episodeId] | {Number} | Episode ID |
| [obj.nbpp] | {Number} | Number of comments per page |
| [obj.since_id] | {Number} | ID of last comment received (optional) |
| [obj.order] | {String} | Chronological order of return, `desc` or `asc` (default `asc`) |
| [obj.replies] | {Number} | Include comments reply (`1` or `0`, default `1`) |

**Example**  

```js
BetaSeries.getAction('comments', 'doFetchEpisodeComments')({ episodeId: 438 });
```

<a name="module_Comments.doFetchEventComments"></a>

### .doFetchEventComments([obj])

Retrieve comment of the episode

**Dispatch**: `FETCH_EPISODE_COMMENTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.eventId] | {Number} | Event ID |
| [obj.nbpp] | {Number} | Number of comments per page |
| [obj.since_id] | {Number} | ID of last comment received (optional) |
| [obj.order] | {String} | Chronological order of return, `desc` or `asc` (default `asc`) |
| [obj.replies] | {Number} | Include comments reply (`1` or `0`, default `1`) |

**Example**  

```js
BetaSeries.getAction('comments', 'doFetchEventComments')({ eventId: 42315431 });
```

<a name="module_Comments.doFetchShowComments"></a>

### .doFetchShowComments([obj])

Retrieve comments of the show

**Dispatch**: `FETCH_SHOW_COMMENTS`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.showId] | {Number} | Show ID |
| [obj.nbpp] | {Number} | Number of comments per page |
| [obj.since_id] | {Number} | ID of last comment received (optional) |
| [obj.order] | {String} | Chronological order of return, `desc` or `asc` (default `asc`) |
| [obj.replies] | {Number} | Include comments reply (`1` or `0`, default `1`) |

**Example**  

```js
BetaSeries.getAction('comments', 'doFetchShowComments')({ showId: 481 });
```

<a name="module_Comments.comments"></a>

### .comments(state, action)

List of comments

**Actions listened**:

 * `FETCH_EPISODE_COMMENTS`
 * `FETCH_SHOW_COMMENTS`
 * `FETCH_EVENT_COMMENTS`
 * `FETCH_COMMENT`
 * `FETCH_FRIENDS_TIMELINE`
 * `FETCH_FEED_TIMELINE`
 * `FETCH_TIMELINE_EVENT`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('comments', 'comments').comments;

// state example
{
  '384144': {      // comment ID
    id: 384144,    // comment element
    ...comments,
  },
  ...,
}
```

<a name="module_Comments.episodes"></a>

### .episodes(state, action)

List the comments of the episode

**Actions listened**:

 * `FETCH_EPISODE_COMMENTS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('comments', 'episodes').commentsEpisodes;

// state value example
{
  '12': [               // episode ID
    1234, 213, 2343,    // list of comments ID
  ],
  ...,
}
```

<a name="module_Comments.events"></a>

### .events(state, action)

List the comments of the episode

**Actions listened**:

 * `FETCH_EVENT_COMMENTS`
 * `COMMENT_EVENT`
 * `FETCH_FRIENDS_TIMELINE`
 * `FETCH_FEED_TIMELINE`
 * `FETCH_TIMELINE_EVENT`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('comments', 'events').commentsEvents;

// state value example
{
  '12': [               // event ID
    1234, 213, 2343,    // list of comments ID
  ],
  ...,
}
```

<a name="module_Comments.shows"></a>

### .shows(state, action)

List the comments of the show

**Actions listened**:

 * `FETCH_SHOW_COMMENTS`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('comments', 'shows').commentsShows;

// state value example
{
  '12': [               // show ID
    1234, 213, 2343,    // list of comments ID
  ],
  ...,
}
```

<a name="module_Comments.getComment"></a>

### .getComment

Select comment from state

**Returns**: {Object} - Comment element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the folling: |
| [obj.commentId] | {Object} | Comment ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('comments', 'getComment')(state, { commentId: props.commentId });
});
```

<a name="module_Comments.getEpisodeComments"></a>

### .getEpisodeComments

Select episode comments from state

**Returns**: {Array} - List of comments or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the folling: |
| [obj.episodeId] | {Object} | Episode ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('comments', 'getEpisodeComments')(state, {
    episodeId: props.episodeId
  });
});
```

<a name="module_Comments.getEventComments"></a>

### .getEventComments

Select event comments from state

**Returns**: {Array} - List of comments or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the folling: |
| [obj.eventId] | {Object} | Event ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('comments', 'getEventComments')(state, {
    eventId: props.eventId
  });
});
```

<a name="module_Comments.getShowComments"></a>

### .getShowComments

Select show comments from state

**Returns**: {Array} - List of comments or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the folling: |
| [obj.showId] | {Object} | Show ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  show: BetaSeries.getSelector('comments', 'getShowComments')(state, {
    showId: props.showId
  });
});
```

