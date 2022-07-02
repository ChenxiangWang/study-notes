
// ------------ 问题 3: 构建导航菜单
// 使用数据库中的结点列表构建导航菜单

let data = [
    { id: 0, pid: -1, name: '面试' },
    { id: 1, pid: 0, name: '计算机基础知识及原理' },
    { id: 2, pid: 0, name: '前端技能' },
    { id: 3, pid: 0, name: '综合素质' },
    { id: 4, pid: 1, name: '编码' },
    { id: 5, pid: 1, name: '操作系统' },
    { id: 6, pid: 1, name: '网络' },
    { id: 7, pid: 1, name: '数据结构' },
    { id: 8, pid: 2, name: 'js' },
    { id: 9, pid: 2, name: '异步' },
    { id: 10, pid: 2, name: '项目' },
    { id: 11, pid: 3, name: '学习能力' },
    { id: 12, pid: 3, name: '解决问题能力' },
]

function build (nodes) {
    // 请实现这个函数，要求时间复杂度 O(n)
    // （可以直接修改结点列表 data 中的各个结点，如增加 children 属性）

    let rootId = null; // 记录root id
    let map = new Map(); // 缓存节点的map

    for (let i = 0; i < nodes.length; i++) {

        // 记录root id
        if (nodes[i].pid === -1) {
            rootId = nodes[i].id;
        }

        // 从缓存map中 获取parent节点
        // [!] 数据库返回数据的顺序没有提及，默认按 nodes  可能是乱序处理
        // [!] 所以，可能存在：父节点还未放入缓存中, 而子节点先出现的情况
        let parent;
        if (map.has(nodes[i].pid)) {
            parent = map.get(nodes[i].pid);
        } else {
            // 不存在缓存中，提前创建一个 父节点
            parent = {id: nodes[i].pid};
            map.set(nodes[i].pid, parent);
        }
        if (!parent.children) {
            parent.children = [];
        }

        // 向缓存中添加/更新 儿子节点
        if (map.has(nodes[i].id)) {
            let n = map.get(nodes[i].id);
            n.pid = nodes[i].pid;
            n.name = nodes[i].name;
        } else {
            map.set(nodes[i].id, nodes[i]);
        }
        // 建立父子关系
        parent.children.push(map.get(nodes[i].id));
    }
    return map.get(rootId);
}
console.log(build(data));