# 排序算法

![对比](https://raw.githubusercontent.com/lxfriday/give-me-job/master/algorithm/排序/assets/sort.png)

关于时间复杂度：

1. 平方阶 (O(n\*\*2)) 排序 各类简单排序：直接插入、直接选择和冒泡排序。
1. 线性对数阶 (O(nlog2n)) 排序： 快速排序、堆排序和归并排序；
1. O(n1+§)) 排序，§ 是介于 0 和 1 之间的常数。 希尔排序
1. 线性阶 (O(n)) 排序 基数排序，此外还有桶、箱排序。

原地排序：特指空间复杂度是 O(1) 的排序算法。

稳定性：如果待排序的序列中存在值相等的元素，经过排序之后，相等元素之间原有的先后顺序不变。

<!--
- 冒泡排序
  - 鸡尾酒排序
- 选择排序
- 插入排序
- 快速排序
- 希尔排序
- 归并排序
- 堆排序
- 计数排序
- 基数排序
- 桶排序 -->

## 冒泡排序

冒泡排序（英语：Bubble Sort）又称为泡式排序，是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。

冒泡排序对 n 个项目需要 O(n\*\*2) 的比较次数，且可以原地排序。尽管这个算法是最简单了解和实现的排序算法之一，但它对于包含大量的元素的数列排序是很没有效率的。

冒泡排序是与插入排序拥有相等的运行时间，但是两种算法在需要的交换次数却很大地不同。在最坏的情况，冒泡排序需要 O(n\*\*2) 次交换，而插入排序只要最多 O(n) 交换。冒泡排序的实现（类似下面）通常会对已经排序好的数列拙劣地运行（O(n \*\* 2)），而插入排序在这个例子只需要 O(n) 个运算。因此很多现代的算法教科书避免使用冒泡排序，而用插入排序取代之。冒泡排序如果能在内部循环第一次运行时，使用一个旗标来表示有无需要交换的可能，也可以把最优情况下的复杂度降低到 O(n) 。在这个情况，已经排序好的数列就无交换的需要。若在每次走访数列时，把走访顺序反过来，也可以稍微地改进效率。有时候称为**鸡尾酒排序**，因为算法会从数列的一端到另一端之间穿梭往返。

冒泡排序算法的运作如下：

1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
1. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
1. 针对所有的元素重复以上的步骤，除了最后一个。
1. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

- [冒泡排序](https://zh.wikipedia.org/wiki/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F)
- [冒泡排序 ts 实现](https://github.com/lxfriday/give-me-job/blob/master/algorithm/排序/bubbleSort.ts)
- [鸡尾酒排序](https://zh.wikipedia.org/wiki/%E9%B8%A1%E5%B0%BE%E9%85%92%E6%8E%92%E5%BA%8F)
- [鸡尾酒排序 ts 实现](https://github.com/lxfriday/give-me-job/blob/master/algorithm/排序/cocktailSort.ts)

冒泡排序

![冒泡排序](https://raw.githubusercontent.com/lxfriday/give-me-job/master/algorithm/排序/assets/bubbleSort.gif)

![冒泡排序2](https://upload.wikimedia.org/wikipedia/commons/3/37/Bubble_sort_animation.gif)

鸡尾酒排序

![鸡尾酒排序](https://upload.wikimedia.org/wikipedia/commons/e/ef/Sorting_shaker_sort_anim.gif)

## 选择排序

选择排序（Selection sort）是一种简单直观的排序算法。它的工作原理如下。首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。

选择排序的主要优点与数据移动有关。如果某个元素位于正确的最终位置上，则它不会被移动。选择排序每次交换一对元素，它们当中至少有一个将被移到其最终位置上，因此对 n 个元素的表进行排序总共进行至多 n - 1 次交换。**在所有的完全依靠交换去移动元素的排序方法中，选择排序属于非常好的一种。**

- [选择排序](https://zh.wikipedia.org/wiki/%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F)
- [选择排序 ts 实现](https://github.com/lxfriday/give-me-job/blob/master/algorithm/排序/selectionSort.ts)

![选择排序1](https://raw.githubusercontent.com/lxfriday/give-me-job/master/algorithm/排序/assets/selectionSort.gif)

![选择排序2](https://upload.wikimedia.org/wikipedia/commons/b/b0/Selection_sort_animation.gif)

![选择排序3](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)

## 插入排序

插入排序（英语：Insertion Sort）是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。插入排序在实现上，通常采用 in-place 排序（即只需用到 O(1) 的额外空间的排序），因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。

Insertion Sort 和打扑克牌时，从牌桌上逐一拿起扑克牌，在手上排序的过程相同。

一般来说，插入排序都采用 in-place 在数组上实现。具体算法描述如下：

1. 从第一个元素开始，该元素可以认为已经被排序
1. 取出下一个元素，在已经排序的元素序列中从后向前扫描
1. 如果该元素（已排序）大于新元素，将该元素移到下一位置
1. 重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置
1. 将新元素插入到该位置后
1. 重复步骤 2~5

![插入排序1](https://raw.githubusercontent.com/lxfriday/give-me-job/master/algorithm/排序/assets/insertionSort.gif)

![插入排序2](https://upload.wikimedia.org/wikipedia/commons/2/25/Insertion_sort_animation.gif)

![插入排序3](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

## 快速排序

快速排序，快速排序（英语：Quicksort），又称划分交换排序（partition-exchange sort），简称快排，一种排序算法，最早由东尼·霍尔提出。在平均状况下，排序 n 个项目要 O(nlogn) （大 O 符号）次比较。在最坏状况下则需要 O(n\*\*2) 次比较，但这种状况并不常见。事实上，快速排序 O(nlogn) 通常明显比其他算法更快，因为它的内部循环（inner loop）可以在大部分的架构上很有效率地达成。

快速排序使用 **分治法（Divide and conquer）** 策略来把一个序列（list）分为较小和较大的 2 个子序列，然后递归地排序两个子序列。

步骤为：

1. 挑选基准值：从数列中挑出一个元素，称为“基准”（pivot），
1. 分割：重新排序数列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（与基准值相等的数可以到任何一边）。在这个分割结束之后，对基准值的排序就已经完成，
1. 递归排序子序列：递归地将小于基准值元素的子序列和大于基准值元素的子序列排序。

递归到最底部的判断条件是数列的大小是零或一，此时该数列显然已经有序。

选取基准值有数种具体方法，此选取方法对排序的时间性能有决定性影响。

- [快速排序](https://zh.wikipedia.org/wiki/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F)
- [快速排序 ts 实现](https://github.com/lxfriday/give-me-job/blob/master/algorithm/排序/quickSort.ts)

![快速排序](https://raw.githubusercontent.com/lxfriday/give-me-job/master/algorithm/排序/assets/quicksort.gif)

![快速排序](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

## 希尔排序(shell sort)

希尔排序，也称递减增量排序算法，是插入排序的一种更高效的改进版本。希尔排序是非稳定排序算法。

希尔排序是基于插入排序的以下两点性质而提出改进方法的：

1. 插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到线性排序的效率
1. 但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位

希尔排序通过将比较的全部元素分为几个区域来提升插入排序的性能。这样可以让一个元素可以一次性地朝最终位置前进一大步。然后算法再取越来越小的步长进行排序，算法的最后一步就是普通的插入排序，但是到了这步，需排序的数据几乎是已排好的了（此时插入排序较快）。

- [希尔排序](https://zh.wikipedia.org/wiki/%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F)
- [希尔排序 ts 实现](https://github.com/lxfriday/give-me-job/blob/master/algorithm/排序/shellSort.ts)

![希尔排序](https://upload.wikimedia.org/wikipedia/commons/d/d8/Sorting_shellsort_anim.gif)

## 归并排序(merge sort)

归并排序（英语：Merge sort，或 mergesort），是创建在归并操作上的一种有效的排序算法，效率为 O(nlogn)。1945 年由约翰·冯·诺伊曼首次提出。该算法是采用 **分治法（Divide and Conquer）** 的一个非常典型的应用，且各层分治递归可以同时进行。

采用分治法:

1. 分割：递归地把当前序列平均分割成两半。
1. 集成：在保持元素顺序的同时将上一步得到的子序列集成到一起（归并）。

归并操作（merge），也叫归并算法，指的是将两个已经排序的序列合并成一个序列的操作。归并排序算法依赖归并操作。

归并排序有两种思路：

**递归法（Top-down）**

<img src=https://raw.githubusercontent.com/lxfriday/give-me-job/master/algorithm/排序/assets/mergesort1.png width=300 />

1. 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列
1. 设定两个指针，最初位置分别为两个已经排序序列的起始位置
1. 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置
1. 重复步骤 3 直到某一指针到达序列尾
1. 将另一序列剩下的所有元素直接复制到合并序列尾

**迭代法（Bottom-up）**

<img src=https://raw.githubusercontent.com/lxfriday/give-me-job/master/algorithm/排序/assets/mergesort2.png width=300 />

原理如下（假设序列共有 n 个元素）：

1. 将序列每相邻两个数字进行归并操作，形成 ceil(n/2) 个序列，排序后每个序列包含两/一个元素
1. 若此时序列数不是 1 个则将上述序列再次归并，形成 ceil(n/4) 个序列，每个序列包含四/三个元素
1. 重复步骤 2，直到所有元素排序完毕，即序列数为 1

- [归并排序](https://zh.wikipedia.org/wiki/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F)
- [归并排序（自顶向下，递归法） ts 实现](https://github.com/lxfriday/give-me-job/blob/master/algorithm/排序/mergeSort.ts)
- [归并排序（自底向上，迭代法） ts 实现](https://github.com/lxfriday/give-me-job/blob/master/algorithm/排序/mergeSort2.ts)

![归并排序](https://raw.githubusercontent.com/hustcc/JS-Sorting-Algorithm/master/res/mergeSort.gif)
![归并排序](https://upload.wikimedia.org/wikipedia/commons/c/c5/Merge_sort_animation2.gif)
![排序一组数字](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

## 堆排序(heap sort)

通常堆是通过一维数组来实现的。在数组起始位置为 0 的情形中：

1. 父节点 i 的左子节点在位置 2 \* i + 1
1. 父节点 i 的右子节点在位置 2 \* i + 2
1. 子节点 i 的父节点在位置 floor((i -1) / 2)

堆的操作

在堆的数据结构中，堆中的最大值总是位于根节点（在优先队列中使用堆的话堆中的最小值位于根节点）。堆中定义以下几种操作：

1. 最大堆调整（Max Heapify）：将堆的末端子节点作调整，使得子节点永远小于父节点
1. 创建最大堆（Build Max Heap）：将堆中的所有数据重新排序
1. 堆排序（HeapSort）：移除位在第一个数据的根节点，并做最大堆调整的递归运算

- [堆排序](https://zh.wikipedia.org/wiki/%E5%A0%86%E6%8E%92%E5%BA%8F)
- [堆排序 ts 实现](https://github.com/lxfriday/give-me-job/blob/master/algorithm/排序/heapSort.ts)

![堆排序](https://upload.wikimedia.org/wikipedia/commons/1/1b/Sorting_heapsort_anim.gif)

## 计数排序

**限定为非负数**

计数排序（Counting sort）是一种稳定的线性时间排序算法。该算法于 1954 年由 Harold H. Seward 提出。计数排序使用一个额外的数组 C ，其中第 i 个元素是待排序数组 A 中值等于 i 的元素的个数。然后根据数组 C 来将 A 中的元素排到正确的位置。

当输入的元素是 n 个 0 到 k 之间的整数时，它的运行时间是 t(n+k)。计数排序不是比较排序，**排序的速度快于任何比较排序算法**。

由于用来计数的数组 C 的长度取决于待排序数组中数据的范围（等于待排序数组的最大值与最小值的差加上 1），这使得计数排序对于数据范围很大的数组，需要大量时间和内存。例如：计数排序是用来排序 0 到 100 之间的数字的最好的算法，但是它不适合按字母顺序排序人名。但是，计数排序可以用在基数排序算法中，能够更有效的排序数据范围很大的数组。

算法的步骤如下：

1. 找出待排序的数组中最大和最小的元素
1. 统计数组中每个值为 i 的元素出现的次数，存入数组 C 的第 i 项
1. 所有的计数累加（从 C 中的第一个元素开始，每一项和前一项相加）
1. 反向填充目标数组：将每个元素 i 放在新数组的第 C[i]项，每放一个元素就将 C[i] 减去 1

- [计数排序](https://zh.wikipedia.org/wiki/%E8%AE%A1%E6%95%B0%E6%8E%92%E5%BA%8F)
- [计数排序 ts 实现](https://github.com/lxfriday/give-me-job/blob/master/algorithm/排序/countingSort.ts)

![计数排序](https://raw.githubusercontent.com/lxfriday/give-me-job/master/algorithm/排序/assets/countingSort.gif)

## 基数排序

基数排序（英语：Radix sort）是一种非比较型整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。由于整数也可以表达字符串（比如名字或日期）和特定格式的浮点数，所以基数排序也不是只能使用于整数。基数排序的发明可以追溯到 1887 年赫尔曼·何乐礼在打孔卡片制表机（Tabulation Machine）上的贡献。

它是这样实现的：将所有待比较数值（正整数）统一为同样的数字长度，数字较短的数前面补零。然后，从最低位开始，依次进行一次排序。这样从最低位排序一直到最高位排序完成以后，数列就变成一个有序序列。

基数排序的方式可以采用 LSD（Least significant digital）或 MSD（Most significant digital），LSD 的排序方式由键值的最右边开始，而 MSD 则相反，由键值的最左边开始。

基数排序的时间复杂度是 O(k\*n)，其中 n 是排序元素个数，k 是数字位数。这不是说这个时间复杂度一定优于 O(nlogn)，k 的大小取决于数字位的选择（比如比特位数），和待排序数据所属数据类型的全集的大小；k 决定了进行多少轮处理，而 n 是每轮处理的操作数目。

- [基数排序](https://zh.wikipedia.org/wiki/%E5%9F%BA%E6%95%B0%E6%8E%92%E5%BA%8F)
- [基数排序 ts 实现](https://github.com/lxfriday/give-me-job/blob/master/algorithm/排序/radixSort.ts)

![基数排序](https://raw.githubusercontent.com/lxfriday/give-me-job/master/algorithm/排序/assets/radixSort.gif)

## 桶排序、箱排序

**桶排序（Bucket sort）**或所谓的**箱排序**，是一个排序算法，工作的原理是将数组分到有限数量的桶里。每个桶再个别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排序）。桶排序是鸽巢排序的一种归纳结果。当要被排序的数组内的数值是均匀分配的时候，桶排序使用线性时间（O(n)）。但桶排序并不是比较排序，他不受到 O(nlogn)下限的影响。

桶排序以下列程序进行：

1. 设置一个定量的数组当作空桶子。
1. 寻访序列，并且把项目一个一个放到对应的桶子去。
1. 对每个不是空的桶子进行排序。
1. 从不是空的桶子里把项目再放回原来的序列中。

- [桶排序](https://zh.wikipedia.org/wiki/%E6%A1%B6%E6%8E%92%E5%BA%8F)
- [桶排序 ts 实现](https://github.com/lxfriday/give-me-job/blob/master/algorithm/排序/bucketSort.ts)

![桶排序](https://raw.githubusercontent.com/lxfriday/give-me-job/master/algorithm/排序/assets/bucketSort.gif)
图片来自：五分钟学算法

## 参考

- [hustcc/JS-Sorting-Algorithm](https://github.com/hustcc/JS-Sorting-Algorithm)
