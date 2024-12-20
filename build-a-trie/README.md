## Description
The goal of this kata is to implement trie (or prefix tree) using dictionaries (aka hash maps or hash tables), where:

the dictionary keys are the prefixes
the value of a leaf node is None in Python, nil in Ruby, null in Groovy, JavaScript and Java, and Nothing in Haskell.
the value for empty input is {} in Python, Ruby, Javascript and Java (empty map), [:] in Groovy, and Trie [] in Haskell.

```bash
buildTrie() => {}
buildTrie("") => {}
buildTrie("trie") => {'t': {'tr': {'tri': {'trie': null}}}}
buildTrie("tree") => {'t': {'tr': {'tre': {'tree': null}}}}
buildTrie("A","to", "tea", "ted", "ten", "i", "in", "inn") => {'A': null, 't': {'to': null, 'te': {'tea': null, 'ted': null, 'ten': null}}, 'i': {'in': {'inn': null}}}
buildTrie("true", "trust") => {'t': {'tr': {'tru': {'true': null, 'trus': {'trust': null}}}}}
```