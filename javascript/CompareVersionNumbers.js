/*
Leetcode:
Compare two version numbers version1 and version2.
If version1 > version2 return 1; if version1 < version2 return -1;otherwise return 0.

You may assume that the version strings are non-empty and contain only digits and the . character.
The . character does not represent a decimal point and is used to separate number sequences.
For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

Example 1:

Input: version1 = "0.1", version2 = "1.1"
Output: -1
Example 2:

Input: version1 = "1.0.1", version2 = "1"
Output: 1
Example 3:

Input: version1 = "7.5.2.4", version2 = "7.5.3"
Output: -1

*/

var compareVersion = function(version1, version2) {
  version1 = version1.split('.');
  version2 = version2.split('.');

  for (var i = 0; i < version1.length; i++) {
    if (version2[i]) {
      if (parseInt(version1[i]) > parseInt(version2[i])) {
        return 1;
      } else if (parseInt(version1[i]) < parseInt(version2[i])) {
        return -1;
      }
    } else {
      if (version1[i] > 0) {
        return 1;
      }
    }
  }
  if (version2[i]) {
    while (i <= version2.length) {
      if (version2[i] > 0) {
        return -1;
      }
      i++;
    }
  }
  return 0;
};

let version1 = '0.1',
  version2 = '1.1';

console.log(compareVersion(version1, version2));

version1 = '7.5.2.4';
version2 = '7.5.3';

console.log(compareVersion(version1, version2));

/* Method 2

var compareVersion = function(version1, version2) {
    version1 = version1.split('.');
    version2 = version2.split('.');

    const len = Math.max(version1.length, version2.length);

    for (let i = 0; i < len; i++) {
        const v1 = parseInt(version1[i]), v2 = parseInt(version2[i]);
        const n1 = isNaN(v1) ? 0 : v1;
        const n2 = isNaN(v2) ? 0 : v2;

        if (n1 !== n2) {
            return n1 < n2 ? -1 : 1;
        }
    }
    return 0;
};
*/
