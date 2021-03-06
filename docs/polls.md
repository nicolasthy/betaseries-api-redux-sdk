[Back to API index](README.md)

# Polls

* [Polls](#module_Polls)
    * _actions_
        * [.doAnswerPoll([obj])](#module_Polls.doAnswerPoll) ⇒ {Promise}
        * [.doFetchLastPoll()](#module_Polls.doFetchLastPoll) ⇒ {Promise}
    * _reducers_
        * [.polls(state, action)](#module_Polls.polls) ⇒ {Object}
    * _selectors_
        * [.getLastPoll](#module_Polls.getLastPoll) ⇒ {Array}
        * [.getPoll](#module_Polls.getPoll) ⇒ {Array}

<a name="module_Polls.doAnswerPoll"></a>

### .doAnswerPoll([obj])

Add answer on poll

**Dispatch**: `ANSWER_POLL`

**Returns**: {Promise}

**Category**: actions  

| Param | Type | Description |
| --- | --- | --- |
| [obj] | {Object} | Accept the folling: |
| [obj.pollId] | {Number} | Poll ID |
| [obj.answer] | {String} | Index of answer |

**Example**  

```js
BetaSeries.getAction('polls', 'doAnswerPoll')({
  pollId: 120,
  answer: 1,
});
```

<a name="module_Polls.doFetchLastPoll"></a>

### .doFetchLastPoll()

Retrieve last poll

**Dispatch**: `FETCH_LAST_POLL`

**Returns**: {Promise}

**Category**: actions  
**Example**  

```js
BetaSeries.getAction('polls', 'doFetchLastPoll')();
```

<a name="module_Polls.polls"></a>

### .polls(state, action)

List of polls

**Actions listened**:

 * `FETCH_LAST_POLL`

**Returns**: {Object}

**Category**: reducers  

| Param | Type |
| --- | --- |
| state | {Object} | 
| action | {Object} | 

**Example**  

```js
// get reducer
BetaSeries.getReducer('polls', 'polls').polls;

// state value example
{
  '12': {      // poll ID
    id: 12,    // poll element
    ...poll,
  },
  ...,
}
```

<a name="module_Polls.getLastPoll"></a>

### .getLastPoll

Select last poll from state

**Returns**: {Array} - Poll element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  poll: BetaSeries.getSelector('polls', 'getLastPoll')(state);
});
```

<a name="module_Polls.getPoll"></a>

### .getPoll

Select poll by ID from state

**Returns**: {Array} - Poll element or `undefined`

**Category**: selectors  

| Param | Type | Description |
| --- | --- | --- |
| [state] | {Object} | Redux state |
| [obj] | {Object} | Accept the folling: |
| [obj.pollId] | {Number} | Poll ID |

**Example**  

```js
const mapStateToProps = (state, props) => ({
  poll: BetaSeries.getSelector('polls', 'getPoll')(state, {
    pollId: props.pollId,
  });
});
```

