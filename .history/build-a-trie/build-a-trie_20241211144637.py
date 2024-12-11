def build_trie(*words):
    trie_dict = {}

    for word in words:
        current_dict = trie_dict
        prev_word = ''
        if word == '':
            return {}
        for char in word:
            current_word = prev_word + char
            prev_word = current_word
            if current_word not in current_dict:
                current_dict[current_word] = {}
            current_dict = current_dict[current_word]

    def replace_empty_dicts(d):
        for key, value in d.items():
            if value == {}:
                d[key] = None
            elif isinstance(value, dict):
                replace_empty_dicts(value)

    replace_empty_dicts(trie_dict)

    return trie_dict

print(build_trie("A", "to", "tea", "ted", "ten", "i", "in", "inn"))
