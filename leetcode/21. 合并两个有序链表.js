var mergeTwoLists = function(list1, list2) {
    const prehead = new ListNode(-1);

    let list = {};
    let head = list;

    while (list1.next || list2.next) {

        head = head.next;
        if (!list1.next) {
            head.value = list2.value;
            head.next = list2.next;
        }
        if (!list2.next) {
            head.value = list1.value;
            head.next = list1.next;
        }
        
        if (list1.value < list2.value) {
            head.value = list1.value;
            list1 = list1.next;
        } else {
            head.value = list2.value;
            list2 = list2.next;
        }
    }

    return list;

};