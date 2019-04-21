          /*
        实现一个字符串头尾去除空格的函数
        注意需要去除的空格，包括全角、半角空格
        暂时不需要学习和使用正则表达式的方式
        */
       function diyTrim(str) {
        var result = "";
        var start = 0;
        var end = str.length - 1;
        while(str.charAt(start) == ' ' || str.charCodeAt(start) == 12288){
            start++;
        }
        while(str.charAt(end) == ' ' || str.charCodeAt(end) == 12288){
            end--;
        }
        result = start <= end ? str.substring(start, end + 1) : ''; 
        return result;
    }

    // 测试用例
    console.log(diyTrim(' a f b    ')); // ->a f b
    console.log(diyTrim('    ffdaf    ')); // ->ffdaf
    console.log(diyTrim('1    ')); // ->1
    console.log(diyTrim('　　f')); // ->f
    console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
    console.log(diyTrim(' ')); // ->
    console.log(diyTrim('　')); // ->
    console.log(diyTrim('')); // ->

    /*
    去掉字符串str中，连续重复的地方
    */
    function removeRepetition(str) {
        var result = "";
        var position = 0;
        var tmp = '';
        while(position < str.length){
            if(tmp != str.charAt(position)){
                result += str.charAt(position);
            }
            tmp =  str.charAt(position);
            position++;
        }
        return result;
    }

    // 测试用例
    console.log(removeRepetition("aaa")); // ->a
    console.log(removeRepetition("abbba")); // ->aba
    console.log(removeRepetition("aabbaabb")); // ->abab
    console.log(removeRepetition("")); // ->
    console.log(removeRepetition("abc")); // ->abc