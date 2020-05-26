const getRandomNums = () => {
    const randomNums = [];
    for(let i = 0; i < 10; i++) {
        let num = Math.round(Math.random() * 10);
        randomNums.push(num);
    }
    return randomNums;
};

function bubbleSort(array) {
    for(let i = 0; i < array.length(); i++) {
        if(array[i] < array[i]) {
            continue;
        }
        if(array[i] > array[i+1]) {
            [array[i], array[i+1] = array[i+1], array[i]];
        }

    }
};

function isSorted(array) {
    while(!sorted(BubbleSort)) {
        bubbleSort(array);
    }
    console.log(array);
};