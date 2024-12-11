def build_trie(*words):
    trie_dict = {}

    for word in words:
        current_dict = trie_dict
        previuos_word = ''
        if len(word) == 1:
            trie_dict[word] = None
        elif word == '':
            trie_dict[word] = {}
        else:
            for char in word:
                current_word = previuos_word + char
                previuos_word = current_word
                current_dict[current_word] = {}
                current_dict = current_dict[current_word]
            current_dict[word] = None
    return trie_dict

build_trie("", "A","to", "tea", "ted", "ten", "i", "in", "inn")


