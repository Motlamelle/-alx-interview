#!/usr/bin/env python3
"""Defining the method validUTF8"""
from typing import List


def validUTF8(data: List[int]) -> bool:
    """
    This method determines if a given data set represents
    a valid UTF-8 encoding
    """

    result = filter(lambda x: x <= 247, data)
    if len(list(result)) != len(data):
        return False
    return True
