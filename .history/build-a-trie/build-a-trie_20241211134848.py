def build_trie(*words):
    trie_dict = {}

    for word in words:
        current_dict = trie_dict
        previuos_word = ''
        if len(word) == 1:
            trie_dict[word] = None
        else:
            for char in word:
                current_word = previuos_word + char
                previuos_word = current_word
                current_dict[current_word] = {}
                current_dict = current_dict[current_word]
            current_dict[word] = None
    return trie_dict

test.describe("Sample Tests")

test_data = {
    tuple(): {},
    ("", ): {},
    ("trie",):
         {'t': {'tr': {'tri': {'trie': None}}}},
    ("tree",):
        {'t': {'tr': {'tre': {'tree': None}}}},
    ("trie", "trie"):
        {'t': {'tr': {'tri': {'trie': None}}}},
    ("A","to", "tea", "ted", "ten", "i", "in", "inn"):
        {'A': None, 't': {'to': None, 'te': {'tea': None, 'ted': None, 'ten': None}}, 'i': {'in': {'inn': None}}},
    ("true", "trust"):
         {'t': {'tr': {'tru': {'true': None, 'trus': {'trust': None}}}}},
}

for test_input, expected in sorted(test_data.items()):
    test.assert_equals(build_trie(*test_input), expected)


