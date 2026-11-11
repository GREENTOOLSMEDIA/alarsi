#!/usr/bin/env python3
"""Updates static HTML header/footer from templates, preserving SEO-friendly HTML.
Run from site root: python3 tools/sync_layout.py
"""
from pathlib import Path
import re
ROOT=Path(__file__).resolve().parents[1]
FILES=['index.html','servicios/index.html','news/index.html','news/prodalam-huawei-cloud-sap-rise.html']
for rel in FILES:
    path=ROOT/rel
    depth=len(Path(rel).parts)-1
    prefix='../'*depth
    s=path.read_text(encoding='utf-8')
    for part in ('header','footer'):
        fragment=(ROOT/'templates'/f'{part}.html').read_text(encoding='utf-8').replace('{{ROOT}}',prefix).strip()
        pattern=rf'(<!-- SHARED:{part.upper()}:START -->).*?(<!-- SHARED:{part.upper()}:END -->)'
        s,n=re.subn(pattern,lambda m:m.group(1)+'\n'+fragment+'\n'+m.group(2),s,flags=re.S)
        if n!=1: raise RuntimeError(f'Missing or duplicate {part} markers in {rel}')
    path.write_text(s,encoding='utf-8')
    print('Updated:',rel)
