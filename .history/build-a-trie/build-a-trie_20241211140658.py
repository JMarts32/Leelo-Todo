def build_trie(*words):
    trie_dict = {}

    for word in words:
        current_dict = trie_dict
        previuos_word = ''
        for char in word:
            current_word = previuos_word + char
            previuos_word = current_word
            if current_word not in current_dict:
                current_dict[current_word] = {} if current_word != word else None
            current_dict = current_dict[current_word] if current_word != word else {}

    return trie_dict

print(build_trie("A", "to", "tea", "ted", "ten", "i", "in", "inn"))
