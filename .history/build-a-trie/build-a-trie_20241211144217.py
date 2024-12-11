def build_trie(*words):
    trie_dict = {}

    for word in words:
        current_dict = trie_dict
        # prev_word = ''
        # if word == '':
        #     return {}
        for char in word:
            # current_word = prev_word + char
            # prev_word = current_word
            if char not in current_dict:
                current_dict[char] = {}
            current_dict = current_dict[char]
            current_dict[None] = None
    return trie_dict

print(build_trie("A","to", "tea", "ted", "ten", "i", "in", "inn"))


